import React from "react";
import { observer } from "mobx-react-lite";
import { Typography } from "@material-ui/core";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Result = observer(() => {
  const user = useTypedSelector((state) => state.user);
  console.log(user);
  return (
    <>
      <Typography style={{ margin: "0 auto" }} component="h2" variant="h5">
        Обзор
      </Typography>
      <div className="main-result">
        <div className="img-desc">
          <div className="img">
            <img src={user.photo} alt="" />
          </div>
          <h3>О себе: {user.about}</h3>
        </div>
        <div className="info-result">
          <div className="info-item">
            <h2>Имя:</h2>
            <h3> {user.firstName}</h3>
          </div>
          <div className="info-item">
            <h2>Фамилия:</h2>
            <h3>{user.lastName}</h3>
          </div>
          <div className="info-item">
            <h2>Отчество:</h2>
            <h3>{user.patronymic}</h3>
          </div>
          <div className="info-item">
            <h2>Город проживания:</h2>
            <h3> {user.city}</h3>
          </div>
          <div className="info-item">
            <h2>Пол:</h2>
            <h3> {user.gender}</h3>
          </div>
          <div className="info-item">
            <h2>Дата рождения: </h2>
            <h3>{user.birthDate}</h3>
          </div>
          <div className="info-item">
            <h2>Гражданство: </h2>
            <h3>{user.country}</h3>
          </div>
          <div className="info-item">
            <h2>Желаемая должнось: </h2>
            <h3>{user.position}</h3>
          </div>
          <div className="info-item">
            <h2>Желаемая зарплата: </h2>
            <h3>{user.salary}</h3>
          </div>
          <div className="info-item">
            <h2>Месяц начала работы: </h2>
            <h3>{user.monthStart}</h3>
          </div>
          <div className="info-item">
            <h2>Год начала работы: </h2>
            <h3>{user.yearStart}</h3>
          </div>
          <div className="info-item">
            <h2>Месяц окончания работы: </h2>
            <h3>{user.monthEnd}</h3>
          </div>
          <div className="info-item">
            <h2>Год окончания работы: </h2>
            <h3>{user.yearEnd}</h3>
          </div>
          <div className="info-item">
            <h2>Название компании: </h2>
            <h3>{user.companyName}</h3>
          </div>
          <div className="info-item">
            <h2>Должность: </h2>
            <h3>{user.position}</h3>
          </div>
          <div className="info-item">
            <h2>Обязанности: </h2>
            <h3>{user.responsibilities}</h3>
          </div>
          <div className="info-item">
            <h2>Уровень образования: </h2>
            <h3>{user.education}</h3>
          </div>
          <div className="info-item">
            <h2>Родной язык: </h2>
            <h3>{user.nativeLanguage}</h3>
          </div>
          <div className="info-item">
            <h2>Иностранный язык: </h2>
            <h3>{user.foreignLanguage}</h3>
          </div>
          <div className="info-item">
            <h2>Уровень владения иностранным языком:</h2>
            <h3>{user.foreignLanguageLevel}</h3>
          </div>
          <div className="info-item">
            <h2>Название учебного заведения: </h2>
            <h3>{user.institution}</h3>
          </div>
          <div className="info-item">
            <h2>Факультет: </h2>
            <h3>{user.faculty}</h3>
          </div>
          <div className="info-item">
            <h2>Специализация: </h2>
            <h3>{user.specialization}</h3>
          </div>
          <div className="info-item">
            <h2>Год окончания: </h2>
            <h3>{user.yearEndUniversity}</h3>
          </div>
        </div>
      </div>
    </>
  );
});

export default Result;
