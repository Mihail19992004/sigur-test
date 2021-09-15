import React, {useState} from 'react';
import {MainContainer} from "../components/MainContainer";
import Typography from "@material-ui/core/Typography";
import {Form} from "../components/Form";
import {Input} from "../components/Input";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {PrimaryButton} from "../components/PrimaryButton";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import userInfo from "../store/userData";

const schema = yup.object().shape({
    email: yup.string().email("Некоректный Email").required("Поле не должно быть пустым"),
    yearStart: yup.string().required("Поле не должно быть пустым"),
    monthStart: yup.string().required("Поле не должно быть пустым"),
    yearEnd: yup.string().required("Поле не должно быть пустым"),
    monthEnd: yup.string().required("Поле не должно быть пустым"),
    position: yup.string()
        .matches(/^([^0-9]*)$/, "Поле не должно содержать цифры")
        .required("Поле не должно быть пустым"),
    companyName: yup.string().required("Поле не должно быть пустым")
})


const StepTwo = () => {
    const history = useHistory()
    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })
    const [exp, setExp] = useState('false')

    const onSubmit = (data) => {
        console.log('asasad')
        history.push('/step3')
        userInfo.firstStepAdd(data)
    }
    const handleRadio = (e) => {
        setExp(e.target.value)
    }
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                2. Опыт работы
            </Typography>
            <RadioGroup value={exp} onChange={handleRadio}>
                <FormControlLabel value={'false'} control={<Radio/>} label='Нет опыта работы' />
                <FormControlLabel value={'true'} control={<Radio/>} label='Есть опыт работы' />
            </RadioGroup>

            {
                exp === 'true' ?
                    <Form>
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
                            label="Месяц окончания работы"
                            name="monthEnd"
                            error={!!errors.monthEnd}
                            helperText={errors?.monthEnd?.message}
                            required
                        />
                        <Input
                            ref={register}
                            id="yearEnd"
                            type="number"
                            label="Год окончания работы"
                            name="yearEnd"
                            error={!!errors.yearEnd}
                            helperText={errors?.yearEnd?.message}
                            required
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
                        <TextField id='responsibilities' name='responsibilities' label='Обязанности' variant='outlined' fullWidth multiline rowsMax={5} />
                        <PrimaryButton onClick={handleSubmit(onSubmit)}>Далее</PrimaryButton>
                    </Form>


                    : <PrimaryButton>Далее</PrimaryButton>


                }

        </MainContainer>
    );
};

export default StepTwo;