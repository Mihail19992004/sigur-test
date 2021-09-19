import React, { useState } from "react";
import { MainContainer } from "../components/MainContainer";
import { Form } from "../components/Form";
import { useForm } from "react-hook-form";
import Typography from "@material-ui/core/Typography";
import { Input } from "../components/Input";
import FormLabel from "@material-ui/core/FormLabel";
import { PrimaryButton } from "../components/PrimaryButton";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ActionEnum } from "../types/user";
//Модель валидации данных формы
const schema = yup.object().shape({
  education: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  nativeLanguage: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  foreignLanguage: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  foreignLanguageLevel: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  institution: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  faculty: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  specialization: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  yearEndUniversity: yup.string().required("Поле не должно быть пустым"),
});

export const StepThree = () => {
  const dispatch = useDispatch();

  //Стейт позволяющий добавить несколько иностранных языков
  const [languageQuantity, setLanguageQuantity] = useState(0);
  //Стейт позволяющий добавить несколько учебных заведений
  const [educationQuantity, setEducationQuantity] = useState(0);
  //Хук позволяющий переходить по страницам
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  //Метод срабатывающий при подтверждении формы
  const onSubmit = (data: any) => {
    history.push("/final");
    dispatch({
      type: ActionEnum.USER_ADD_INFO_THIRD_STEP,
      payload: { ...data },
    });
  };
  // Масив включающий в себя инпуты иностранных языков
  const foreignLanguage = [];
  // Масив включающий в себя инпуты учебных заведений
  const education = [];
  //Цикл позволяищий добавлять в массив инпуты иностранных языков
  for (let i = 0; i < languageQuantity; i++) {
    const item = (
      <div className="languageForeign" style={{ margin: "40px auto" }}>
        <Input
          ref={register}
          key={i}
          id={"foreignLanguage" + i}
          type="text"
          label={"Иностранный язык № " + (i + 2)}
          name={"foreignLanguage" + i}
        />
        <Input
          ref={register}
          key={i}
          id={"foreignLanguage" + i + "Level"}
          type="text"
          label={"Уровень владения иностранным языком № " + (i + 2)}
          name={"foreignLanguage" + i + "Level"}
        />
      </div>
    );
    foreignLanguage.push(item);
  }
  //Цикл позволяищий добавлять в массив инпуты учебных заведений
  for (let i = 0; i < educationQuantity; i++) {
    const item = (
      <div style={{ margin: "40px auto" }} className="education">
        <FormLabel>Место обучния № {i + 2}</FormLabel>
        <Input
          ref={register}
          id={"institution" + i}
          type="text"
          label="Название учебного заведения"
          name={"institution" + i}
        />
        <Input
          ref={register}
          id={"faculty" + i}
          type="text"
          label="Факультет"
          name={"faculty" + i}
        />
        <Input
          ref={register}
          id={"specialization" + i}
          type="text"
          label="Специализация"
          name={"specialization" + i}
        />
        <Input
          ref={register}
          id={"yearEndUniversity" + i}
          type="number"
          label="Год окончания"
          name={"yearEndUniversity" + i}
        />
      </div>
    );
    education.push(item);
  }
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        3. Образование
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="education"
          type="text"
          label="Уровень образования"
          name="education"
          required
          error={!!errors.education}
          helperText={errors?.education?.message}
        />
        <FormLabel>Знание языков</FormLabel>
        <Input
          ref={register}
          id="nativeLanguage"
          type="text"
          label="Родной язык"
          name="nativeLanguage"
          error={!!errors.nativeLanguage}
          helperText={errors?.nativeLanguage?.message}
        />
        {
          <div className="foreignLanguage">
            <>
              <Input
                ref={register}
                id={"foreignLanguage"}
                type="text"
                label={"Иностранный язык № 1"}
                name={"foreignLanguage"}
              />
              <Input
                ref={register}
                id={"foreignLanguageLevel"}
                type="text"
                label={"Уровень владения иностранным языком № 1"}
                name={"foreignLanguageLevel"}
              />
            </>
            {/*Добавление в JSX иностранных языков*/}
            {foreignLanguage}
            <PrimaryButton
              onClick={(e: any) => {
                e.preventDefault();
                setLanguageQuantity(languageQuantity + 1);
              }}
            >
              Добавить еще один язык
            </PrimaryButton>
          </div>
        }
        <FormLabel>Место обучения</FormLabel>
        <Input
          ref={register}
          id={"institution"}
          type="text"
          label="Название учебного заведения"
          name={"institution"}
          error={!!errors.institution}
          required
          helperText={errors?.institution?.message}
        />
        <Input
          ref={register}
          id={"faculty"}
          type="text"
          label="Факультет"
          name={"faculty"}
          error={!!errors.faculty}
          helperText={errors?.faculty?.message}
          required
        />
        <Input
          ref={register}
          id={"specialization"}
          type="text"
          label="Специализация"
          name={"specialization"}
          error={!!errors.specialization}
          helperText={errors?.specialization?.message}
          required
        />
        <Input
          ref={register}
          id={"yearEndUniversity"}
          type="number"
          label="Год окончания"
          name={"yearEndUniversity"}
          error={!!errors.nativeLanguage}
          helperText={errors?.yearEndUniversity?.message}
          required
        />
        {
          <div className="education_main">
            {/*Добавление в JSX Учебных заведений*/}
            {education}
            <PrimaryButton
              onClick={(e: any) => {
                e.preventDefault();
                setEducationQuantity(educationQuantity + 1);
              }}
            >
              Добавить учебное заведение
            </PrimaryButton>
          </div>
        }
        <div className="btn" style={{ display: "flex", marginBottom: 20 }}>
          <PrimaryButton style={{ margin: "auto 20px" }}>Далее</PrimaryButton>
        </div>
      </Form>
    </MainContainer>
  );
};
