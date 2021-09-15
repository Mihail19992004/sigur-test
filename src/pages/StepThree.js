import React, {useState} from 'react';
import {MainContainer} from "../components/MainContainer";
import {Form} from "../components/Form";
import {FileInput} from "../components/FileInput";
import {useForm} from "react-hook-form";
import Typography from "@material-ui/core/Typography";
import {Input} from "../components/Input";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import {PrimaryButton} from "../components/PrimaryButton";
import {yupResolver} from "@hookform/resolvers";
import * as yup from "yup";
import {useHistory} from "react-router-dom";
import userInfo from "../store/user";


const schema = yup.object().shape({
    education: yup.string().matches(/^([^0-9]*)$/, "Поле не должно содержать цифры").required("Поле не должно быть пустым"),
    nativeLanguage: yup.string().matches(/^([^0-9]*)$/, "Поле не должно содержать цифры").required("Поле не должно быть пустым"),
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
    yearEndUniversity: yup
        .string()
        .required("Поле не должно быть пустым"),
})


const StepThree = () => {
    const [languageQuantity, setLanguageQuantity] = useState(0)
    const [educationQuantity, setEducationQuantity] = useState(0)
    const history = useHistory()
    const {register, handleSubmit, errors, watch} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        history.push('/final')
        userInfo.firstStepAdd(data)
    }
    const foreignLanguage = []
    const education = []
    for (let i = 0; i< languageQuantity; i++) {
        const item =(
            <div className='languageForeign' style={{margin: '40px auto'}}>
            <Input
                ref={register}
                key={i}
                id={'foreignLanguage' + i}
                type="text"
                label={"Иностранный язык № " + (i+2)}
                name={"foreignLanguage" + i}
            />
                <Input
                    ref={register}
                    key={i}
                    id={'foreignLanguage' + i + 'Level'}
                    type="text"
                    label={"Уровень владения иностранным языком № " + (i+2)}
                    name={"foreignLanguage" + i + 'Level'}
                />
            </div>
        )
        foreignLanguage.push(item)
    }
    for (let i = 0; i < educationQuantity; i++) {
        const item = (
            <div style={{margin: '40px auto'}} className='education'>
                <FormLabel>Место обучния № {i+2}</FormLabel>
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
        )
        education.push(item)
    }
    console.log(education)
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

                                id={'foreignLanguage'}
                                type="text"
                                label={"Иностранный язык № 1"}
                                name={"foreignLanguage"}

                            />
                            <Input
                                ref={register}
                                id={'foreignLanguageLevel'}
                                type="text"
                                label={"Уровень владения иностранным языком № 1"}
                                name={"foreignLanguageLevel"}

                            />
                        </>
                        {foreignLanguage}
                        <PrimaryButton onClick={()=> setLanguageQuantity(languageQuantity+1)}>Добавить еще один язык</PrimaryButton>
                    </div>

                }
                <FormLabel>Место обучения</FormLabel>
                <Input
                    ref={register}
                    id={"institution" }
                    type="text"
                    label="Название учебного заведения"
                    name={"institution" }
                    error={!!errors.institution}
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
                />
                <Input
                    ref={register}
                    id={"specialization"}
                    type="text"
                    label="Специализация"
                    name={"specialization"}
                    error={!!errors.specialization}
                    helperText={errors?.specialization?.message}
                />
                <Input
                    ref={register}
                    id={"yearEndUniversity"}
                    type="number"
                    label="Год окончания"
                    name={"yearEndUniversity"}
                    error={!!errors.nativeLanguage}
                    helperText={errors?.yearEndUniversity?.message}
                />
                {
                    <div className="education_main">
                        {education}
                        <PrimaryButton onClick={()=> setEducationQuantity(educationQuantity+1)}>Добавить учебное заведение</PrimaryButton>
                    </div>

                }
                <div className="btn" style={{display: 'flex', marginBottom: 20}}>

                    <PrimaryButton style={{margin: 'auto 20px'}}>Далее</PrimaryButton>
                </div>
            </Form>
        </MainContainer>
    );
};

export default StepThree;