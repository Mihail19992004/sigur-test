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
import TextField from "@material-ui/core/TextField";
import userInfo from "../store/user";
import { Checkbox } from "@material-ui/core";

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
  const history = useHistory();
  const [workNow, setWorkNow] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(workNow ? schemaTwo : schemaOne),
  });
  const [exp, setExp] = useState("false");

  const onSubmit = (data: any) => {
    history.push("/step3");
    userInfo.firstStepAdd(data);
    if (workNow) {
      userInfo.firstStepAdd({
        yearEnd: new Date().getFullYear(),
        monthEnd: new Date().getMonth() + 1,
      });
    }
  };
  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setExp(e.target.value);
  };
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
          <TextField
            id="responsibilities"
            ref={register}
            name="responsibilities"
            label="Обязанности"
            variant="outlined"
            fullWidth
            multiline
            maxRows={5}
          />
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
