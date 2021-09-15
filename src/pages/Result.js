import React from 'react';
import {observer} from "mobx-react-lite";
import userData from '../store/user'
import {MainContainer} from "../components/MainContainer";
const Result = observer(() => {
    const user = {...userData.user}
    return (
        <div>
            <MainContainer>
                <p>Имя: {user.firstName}</p>
                <p>Фамилия: {user.lastName}</p>
                <p>Отчество: {user.patronymic}</p>
                <p>Город проживания: {user.city}</p>
                <p>Дата рождения: {user.birthDate}</p>
                <p>Пол: {user.gender}</p>
                <p>Гражданство: {user.country}</p>
                <p>Желаемая должнось: {user.position}</p>
                <p>Желаемая зарплата: {user.salary}</p>
                <p>О себе: {user.about}</p>
                <p>Месяц начала работы: {user.mounthStart}</p>
                <p>Год начала работы</p>
                <p>Месяц окончания работы</p>
                <p>Год окончания работы</p>
            </MainContainer>
        </div>
    );
})

export default Result;