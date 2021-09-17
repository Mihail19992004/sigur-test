import React from "react";
import { observer } from "mobx-react-lite";
import userData from "../store/user";
import { MainContainer } from "../components/MainContainer";
import FormLabel from "@material-ui/core/FormLabel";
import { Typography } from "@material-ui/core";
interface UserProps {
  firstName: string | null;
  photo: string | null;
}
const Result = observer(() => {
  const user: any = { ...userData.user };
  console.log(user);
  return (
    <div>
      <MainContainer>
        <Typography component="h2" variant="h5">
          Обзор
        </Typography>
        <img src={user.photo} alt="" />
        <FormLabel>Имя: {user.firstName}</FormLabel>
        <FormLabel>Фамилия: {user.lastName}</FormLabel>
        <FormLabel>Отчество: {user.patronymic}</FormLabel>
        <FormLabel>Город проживания: {user.city}</FormLabel>
        <FormLabel>Пол: {user.gender}</FormLabel>
        <FormLabel>Дата рождения: {user.birthDate}</FormLabel>
        <FormLabel>Гражданство: {user.country}</FormLabel>
        <FormLabel>Желаемая должнось: {user.position}</FormLabel>
        <FormLabel>Желаемая зарплата: {user.salary}</FormLabel>
        <FormLabel>О себе: {user.about}</FormLabel>
        <FormLabel>Месяц начала работы: {user.monthStart}</FormLabel>
        <FormLabel>Год начала работы: {user.yearStart}</FormLabel>
        <FormLabel>Месяц окончания работы: {user.monthEnd}</FormLabel>
        <FormLabel>Год окончания работы: {user.yearEnd}</FormLabel>
        <FormLabel>Название компании: {user.companyName}</FormLabel>
        <FormLabel>Должность: {user.position}</FormLabel>
        <FormLabel>Обязанности: {user.responsibilities}</FormLabel>
        <FormLabel>Уровень образования: {user.education}</FormLabel>
        <FormLabel>Родной язык: {user.nativeLanguage}</FormLabel>
        <FormLabel>Иностранный язык: {user.foreignLanguage}</FormLabel>
        <FormLabel>
          Уровень владения иностранным языком: {user.foreignLanguageLevel}
        </FormLabel>
        <FormLabel>Название учебного заведения: {user.institution}</FormLabel>
        <FormLabel>Факультет: {user.faculty}</FormLabel>
        <FormLabel>Специализация: {user.specialization}</FormLabel>
        <FormLabel>Год окончания: {user.yearEndUniversity}</FormLabel>
        {/*    <p>Имя: {user.firstName}</p>*/}
        {/*    <p>Фамилия: {user.lastName}</p>*/}
        {/*    <p>Отчество: {user.patronymic}</p>*/}
        {/*    <p>Город проживания: {user.city}</p>*/}
        {/*    <p>Дата рождения: {user.birthDate}</p>*/}
        {/*    <p>Пол: {user.gender}</p>*/}
        {/*    <p>Гражданство: {user.country}</p>*/}
        {/*    <p>Желаемая должнось: {user.position}</p>*/}
        {/*    <p>Желаемая зарплата: {user.salary}</p>*/}
        {/*    <p>О себе: {user.about}</p>*/}
        {/*    <p>Месяц начала работы: {user.mounthStart}</p>*/}
        {/*    <p>Год начала работы</p>*/}
        {/*    <p>Месяц окончания работы</p>*/}
        {/*    <p>Год окончания работы</p>*/}
      </MainContainer>
    </div>
  );
});

export default Result;
