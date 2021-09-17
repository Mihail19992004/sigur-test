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
import { FileInput } from "../components/FileInput";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { observer } from "mobx-react-lite";
import userInfo from "../store/user";
import { useHistory } from "react-router-dom";

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
  country: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  position: yup
    .string()
    .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
    .required("Поле не должно быть пустым"),
  salary: yup.string().required("Поле не должно быть пустым"),
});

const StepOne = observer(() => {
  const inputRef = useRef<any>();
  const history = useHistory();
  const [photo, setPhoto] = useState<any>();
  const [gender, setGender] = useState<string>("Мужской");
  const [valute, setValute] = useState<string>("RUB");
  const { register, control, handleSubmit, errors } = useForm<any>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    history.push("/step2");
    userInfo.firstStepAdd(data);
  };
  const removePhoto = () => {
    setPhoto(null);
  };
  const uploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file: any = e!.target!.files;
    reader.readAsDataURL(file[0]);
    reader.onload = (ev) => {
      setPhoto(ev.target!.result);
    };
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        1. Основная информация
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          id="birthDate"
          type="date"
          label="Дата рождения"
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
          id="position"
          type="text"
          label="Желаемая должность"
          name="position"
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
        <TextField
          ref={register}
          name="about"
          id="about"
          label="Расскажите о себе"
          variant="outlined"
          fullWidth
          multiline
          rowsMax={5}
        />
        <PrimaryButton>Далее</PrimaryButton>
      </Form>
    </MainContainer>
  );
});

export default StepOne;
