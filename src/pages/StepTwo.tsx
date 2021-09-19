import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { MainContainer } from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../components/PrimaryButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import { Checkbox } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ActionEnum, SecondStepProps } from "../types/user";
//Создание схемы валидации данных
const schemaOne = yup.object().shape({
  yearStart: yup.string().required("Поле не должно быть пустым"),
  monthStart: yup
    .string()
    .matches(/^(0[1-9]|1[0-2])$/, "Месяца не существует")
    .required("Поле не должно быть пустым"),
  yearEnd: yup.string().required("Поле не должно быть пустым"),
  monthEnd: yup
    .string()
    .matches(/^(0[1-9]|1[0-2])$/, "Месяца не существует")
    .required("Поле не должно быть пустым"),
  position: yup
    .string()

    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  companyName: yup.string().required("Поле не должно быть пустым"),
});
const schemaTwo = yup.object().shape({
  yearStart: yup.string().required("Поле не должно быть пустым"),
  monthStart: yup
    .string()
    .matches(/^(0[1-9]|1[0-2])$/, "Месяца не существует")
    .required("Поле не должно быть пустым"),
  position: yup
    .string()

    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  companyName: yup.string().required("Поле не должно быть пустым"),
});

export const StepTwo = () => {
  const dispatch = useDispatch();
  const [testWork, setTestWork] = useState({});

  const [arrWork, setArrWork] = useState([]);
  const history = useHistory();
  //Стейт позволяющий поставить дату послейдней работы "по настоящее время"
  const [workNow, setWorkNow] = useState(false);
  const [moreWorks, setMoreWorks] = useState(0);
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(workNow ? schemaTwo : schemaOne),
  });
  const works = [];
  const workArray: any[] = [];
  const [exp, setExp] = useState("false");
  // Функция срабатывающая при подтверждении формы
  const onSubmit = (data: SecondStepProps) => {
    history.push("/step3");

    // Условие срабатывает при  нажатии чекбокса "работаю по настоящее время" и отправляет в стейт менеджер текущий месяц и год
    if (workNow) {
      dispatch({
        type: ActionEnum.USER_ADD_INFO_SECOND_STEP,
        payload: {
          ...data,
          yearEnd: new Date().getFullYear(),
          monthEnd: new Date().getMonth() + 1,
          works: arrWork,
        },
      });
    } else if (!workNow) {
      dispatch({
        type: ActionEnum.USER_ADD_INFO_SECOND_STEP,
        payload: {
          ...data,
          works: arrWork,
        },
      });
    }
  };

  // Функция которая изменяет состояние отвечающее за radio button c с опытом работы, а так же за условную отрисовку формы опыта работы
  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setExp(e.target.value);
  };

  const workHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    setTestWork({ ...testWork, [e.target.name]: e.target.value });
    for (let i = 0; i < index; i++) {
      let x = Object.fromEntries(
        Object.entries(testWork).filter(([key, value]) =>
          key.includes(i.toString())
        )
      );
      if (i !== 1) {
        for (let key in x) {
          x[key.replace(key[key.length - 1], "1")] = x[key];
          delete x[key];
        }
      }
      workArray.push(x);
      // @ts-ignore
      setArrWork([...workArray]);
      console.log(arrWork);
    }
  };
  for (let i = 0; i < moreWorks; i++) {
    const item = (
      <div className="more-works">
        <FormLabel>Место работы</FormLabel>
        <Input
          ref={register}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            workHandler(e, moreWorks)
          }
          id="monthStart1"
          type="number"
          label="Месяц начала работы"
          name={"monthStart" + i}
          required
        />
        <Input
          ref={register}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            workHandler(e, moreWorks)
          }
          id="yearStart1"
          type="number"
          label="Год начала работы"
          name={"yearStart" + i}
          required
        />
        <Input
          ref={register}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            workHandler(e, moreWorks)
          }
          id="monthEnd1"
          type="number"
          label={workNow ? null : "Месяц окончания работы"}
          name={"monthEnd" + i}
          value={workNow ? new Date().getMonth() + 1 : null}
          disabled={workNow}
          required
        />
        <Input
          ref={register}
          id="yearEnd1"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            workHandler(e, moreWorks)
          }
          type="number"
          label={workNow ? null : "Год окончания работы"}
          name={"yearEnd" + i}
          disabled={workNow}
          value={workNow ? new Date().getFullYear() : null}
          required
        />
        <FormControlLabel
          onChange={() => {
            setWorkNow(!workNow);
            console.log(workNow);
          }}
          control={
            <Checkbox color="primary" checked={workNow} name="hasPhone" />
          }
          label="По настоящее время"
        />
        <Input
          ref={register}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            workHandler(e, moreWorks)
          }
          id="position"
          type="text"
          label="Должность"
          name={"position" + i}
          required
        />
        <Input
          ref={register}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            workHandler(e, moreWorks)
          }
          id="companyName1"
          type="text"
          label="Название компании"
          name={"companyName" + i}
          required
        />
        <Input
          id="responsibilities1"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            workHandler(e, moreWorks)
          }
          ref={register}
          name={"responsibilities" + i}
          label="Обязанности"
          variant="outlined"
          type="text"
        />
      </div>
    );
    works.push(item);
  }

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        2. Опыт работы
      </Typography>
      <RadioGroup value={exp} onChange={handleRadio}>
        <FormControlLabel
          value={"false"}
          control={<Radio />}
          label="Нет опыта работы"
        />
        <FormControlLabel
          value={"true"}
          control={<Radio />}
          label="Есть опыт работы"
        />
      </RadioGroup>
      {/*Если рвдио кнопка поставлена на том что опыт работы есть то отрисовывается форма для заполнения*/}
      {exp === "true" ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormLabel>Место работы</FormLabel>
          <Input
            ref={register}
            id="monthStart"
            type="number"
            label="Месяц начала работы"
            name="monthStart"
            error={!!errors.monthStart}
            helperText={errors?.monthStart?.message}
            required
          />
          <Input
            ref={register}
            id="yearStart"
            type="number"
            label="Год начала работы"
            name="yearStart"
            error={!!errors.yearStart}
            helperText={errors?.yearStart?.message}
            required
          />
          <Input
            ref={register}
            id="monthEnd"
            type="number"
            label={workNow ? null : "Месяц окончания работы"}
            name="monthEnd"
            value={workNow ? new Date().getMonth() + 1 : null}
            error={workNow ? null : !!errors.monthEnd}
            helperText={workNow ? null : errors?.monthEnd?.message}
            required={!workNow}
            disabled={workNow}
          />
          <Input
            ref={register}
            id="yearEnd"
            type="number"
            label={workNow ? null : "Год окончания работы"}
            name="yearEnd"
            disabled={workNow}
            value={workNow ? new Date().getFullYear() : null}
            error={workNow ? null : !!errors.yearEnd}
            helperText={workNow ? null : errors?.yearEnd?.message}
            required={!workNow}
          />
          <FormControlLabel
            onChange={() => {
              setWorkNow(!workNow);
              console.log(workNow);
            }}
            control={
              <Checkbox color="primary" checked={workNow} name="hasPhone" />
            }
            label="По настоящее время"
          />
          <Input
            ref={register}
            id="position"
            type="text"
            label="Должность"
            name="position"
            error={!!errors.position}
            helperText={errors?.position?.message}
            required
          />
          <Input
            ref={register}
            id="companyName"
            type="text"
            label="Название компании"
            name="companyName"
            error={!!errors.companyName}
            helperText={errors?.companyName?.message}
            required
          />
          <Input
            ref={register}
            id="responsibilities"
            type="text"
            label="Обязанности"
            name="responsibilities"
          />
          {works}
          <PrimaryButton
            onClick={(e: any) => {
              e.preventDefault();

              setMoreWorks(moreWorks + 1);
            }}
          >
            Добавить место рабаты
          </PrimaryButton>
          <div className="btn" style={{ display: "flex", marginTop: 20 }}>
            <PrimaryButton style={{ margin: "auto 20px" }}>Назад</PrimaryButton>
            <PrimaryButton style={{ margin: "auto 20px" }}>Далее</PrimaryButton>
          </div>
        </Form>
      ) : (
        <div className="btn" style={{ display: "flex", marginBottom: 20 }}>
          <PrimaryButton
            onClick={(e: SyntheticEvent) => {
              e.preventDefault();
              history.push("/");
            }}
            style={{ margin: "auto 20px" }}
          >
            Назад
          </PrimaryButton>
          <PrimaryButton
            onClick={() => history.push("/step3")}
            style={{ margin: "auto 20px" }}
          >
            Далее
          </PrimaryButton>
        </div>
      )}
    </MainContainer>
  );
};
