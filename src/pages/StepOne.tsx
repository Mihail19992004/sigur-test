import React, { ChangeEvent, useRef, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { PrimaryButton } from "../components/PrimaryButton";
import { MainContainer } from "../components/MainContainer";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { yupResolver } from "@hookform/resolvers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormLabel from "@material-ui/core/FormLabel";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ActionEnum, FirstStepProps } from "../types/user";
import { useTypedSelector } from "../hooks/useTypedSelector";
// Создание схемы валидации данных
const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  patronymic: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  birthDate: yup.string().required("Поле не должно быть пустым"),
  city: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  country: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  positionDesired: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  salary: yup.string().required("Поле не должно быть пустым"),
});

const StepOne = observer(() => {
  const dispatch = useDispatch();
  const user = useTypedSelector((state) => state.user);
  // Реф который вкулючает в себя ноду инпута файла, что бы скрыть сам инпут, а onClick по инпуту вызывать по клику по кнопке
  const inputRef = useRef<any>();
  //Хук который позволяет нам делать переходы по страниам
  const history = useHistory();
  //Стейт который будет хранить фото
  const [photo, setPhoto] = useState<any>();
  //Стейт который будет хранить пол
  const [gender, setGender] = useState<string>("Мужской");
  // Стейт который будет хранить валюту желаемой зарплаты
  const [valute, setValute] = useState<string>("RUB");

  const { register, handleSubmit, errors } = useForm<any>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  //Метод срабатывающий при подтверждении формы
  // Он позволяет перейти к следующему шагу и записать данные в mobX
  const onSubmit = (data: FirstStepProps) => {
    history.push("/step2");
    dispatch({
      type: ActionEnum.USER_ADD_INFO_FIRST_STEP,
      payload: { ...data, photo: photo, gender, valute },
    });
    console.log(user);
  };
  //Метод удаляет фото выбранное пользователем
  const removePhoto = () => {
    setPhoto(null);
  };
  //Делает из фото ссылку что бы отобразить его на странице
  const uploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file: any = e!.target!.files;
    reader.readAsDataURL(file[0]);
    reader.onload = (ev) => {
      setPhoto(ev.target!.result);
    };
  };
  return (
    //Контейнер с display flex и flex direction column
    <MainContainer>
      {/*// Заголовок*/}
      <Typography component="h2" variant="h5">
        1. Основная информация
      </Typography>
      {/*Использование хука useForm*/}
      {/*При пропуске обязательных полей и не правильном заполнении они подсвечиваются красным*/}

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/*Загрузка фото*/}
        {!photo ? (
          <>
            <PrimaryButton
              onClick={(e: any) => {
                e.preventDefault();
                inputRef.current.click();
              }}
            >
              Добавить фотографию
            </PrimaryButton>
            <input
              style={{ display: "none" }}
              id="file"
              ref={inputRef}
              type="file"
              onChange={(e) => {
                uploadPhoto(e);
              }}
            />
          </>
        ) : (
          <PrimaryButton onClick={removePhoto}>Удалить</PrimaryButton>
        )}

        {photo && (
          <img
            src={photo}
            style={{ maxWidth: 400, maxHeight: 300 }}
            alt="test"
          />
        )}
        <Input
          ref={register}
          id="firstName"
          type="text"
          label="Имя"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          id="lastName"
          type="text"
          label="Фамилия"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
          ref={register}
        />
        <Input
          id="patronymic"
          type="text"
          label="Отчество"
          name="patronymic"
          error={!!errors.patronymic}
          helperText={errors?.patronymic?.message}
          ref={register}
        />
        <Input
          ref={register}
          id="city"
          type="text"
          label="Город проживания"
          name="city"
          error={!!errors.city}
          helperText={errors?.city?.message}
        />
        <FormLabel>Дата рождения</FormLabel>
        <Input
          id="birthDate"
          type="date"
          name="birthDate"
          error={!!errors.birthDate}
          helperText={errors?.birthDate?.message}
          ref={register}
        />
        <Input
          id={"country"}
          type="text"
          label="Прописка"
          name="country"
          error={!!errors.country}
          helperText={errors?.country?.message}
          ref={register}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FormLabel>Ваш пол</FormLabel>
          <Select
            variant="outlined"
            value={gender}
            ref={register}
            onChange={(e) => setGender(e.target.value as string)}
            defaultValue="Муж"
            autoWidth
          >
            <MenuItem value="Мужской">Мужской</MenuItem>
            <MenuItem value="Женский">Женский</MenuItem>
          </Select>
        </div>

        <Input
          ref={register}
          id="positionDesired"
          type="text"
          label="Желаемая должность"
          name="positionDesired"
          error={!!errors.position}
          helperText={errors?.position?.message}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Input
            ref={register}
            id="salary"
            type="number"
            label="Желаемая зарплата"
            name="salary"
            error={!!errors.salary}
            helperText={errors?.salary?.message}
          />
          <Select
            style={{ marginTop: !!errors.salary ? -15 : 7 }}
            variant="outlined"
            value={valute}
            ref={register}
            onChange={(e) => setValute(e.target.value as string)}
            defaultValue="RUB"
            autoWidth
          >
            <MenuItem value="RUB">RUB</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
          </Select>
        </div>
        <Input
          ref={register}
          name="about"
          id="about"
          label="Расскажите о себе"
          type="text"
        />
        <PrimaryButton>Далее</PrimaryButton>
      </Form>
    </MainContainer>
  );
});

export default StepOne;
