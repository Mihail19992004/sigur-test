import { ActionEnum, ActionType, InitialStateProps } from "../../types/user";

const InitialState: InitialStateProps = {
  photo: "",
  about: "",
  firstName: "",
  lastName: "",
  patronymic: "",
  city: "",
  valute: "RUB",
  gender: "",
  birthDate: "",
  country: "",
  position: "",
  salary: "",
  monthStart: "",
  yearStart: "",
  monthEnd: "",
  yearEnd: "",
  companyName: "",
  responsibilities: "",
  works: [],
  education: "",
  nativeLanguage: "",
  foreignLanguage: "",
  foreignLanguageLevel: "",
  institution: "",
  faculty: "",
  specialization: "",
  yearEndUniversity: "",
};
export const userReducer = (
  state = InitialState,
  action: ActionType
): InitialStateProps => {
  switch (action.type) {
    case ActionEnum.USER_ADD_INFO_FIRST_STEP:
      return { ...state, ...action.payload };
    case ActionEnum.USER_ADD_INFO_SECOND_STEP:
      return { ...state, ...action.payload };
    case ActionEnum.USER_ADD_INFO_THIRD_STEP:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
