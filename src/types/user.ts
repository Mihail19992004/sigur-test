export interface SecondStepProps {
  monthStart: string;
  yearStart: string;
  monthEnd: string;
  yearEnd: string;
  position: string;
  companyName: string;
  responsibilities: string;
  works: Works[] | [];
}
export interface FirstStepProps {
  about?: string;
  firstName: string;
  lastName: string;
  photo?: string;
  city: string;
  gender: string;
  positionDesired: string;
  salary: string;
  valute?: string;
}
interface Universities {
  institution1: string;
  faculty1: string;
  specialization1: string;
  yearEndUniversity1: string;
}
interface ActionSecondStep {
  type: ActionEnum.USER_ADD_INFO_SECOND_STEP;
  payload: SecondStepProps;
}
interface ActionFirstStep {
  type: ActionEnum.USER_ADD_INFO_FIRST_STEP;
  payload: FirstStepProps;
}
interface ActionThirdStep {
  type: ActionEnum.USER_ADD_INFO_THIRD_STEP;
  payload: ThirdStepProps;
}
export type ActionType = ActionFirstStep | ActionSecondStep | ActionThirdStep;
export interface ThirdStepProps {
  education: string;
  nativeLanguage: string;
  foreignLanguage: string;
  foreignLanguageLevel: string;
  institution: string;
  faculty: string;
  specialization: string;
  yearEndUniversity: string;
  moreLanguage?: Languages[] | [];
  moreUniversity?: Universities[] | [];
}
interface Languages {
  foreignLanguage1: string;
  foreignLanguageLevel1: string;
}
interface Works {
  monthStart1: string;
  yearStart1: string;
  monthEnd1: string;
  yearEnd1: string;
  position1: string;
  companyName1: string;
  responsibilities1: string;
}
export interface InitialStateProps {
  photo: string;
  about: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  city: string;
  gender: string;
  birthDate: string;
  country: string;
  position: string;
  salary: string;
  valute: string;
  moreLanguage?: Languages[] | [];
  moreUniversity?: Universities[] | [];
  works?: Works[] | [];
  monthStart: string;
  yearStart: string;
  monthEnd: string;
  yearEnd: string;
  companyName: string;
  responsibilities: string;
  education: string;
  nativeLanguage: string;
  foreignLanguage: string;
  foreignLanguageLevel: string;
  institution: string;
  faculty: string;
  specialization: string;
  yearEndUniversity: string;
}

export enum ActionEnum {
  USER_ADD_INFO_FIRST_STEP = "USER_ADD_INFO_FIRST_STEP",
  USER_ADD_INFO_SECOND_STEP = "USER_ADD_INFO_SECOND_STEP",
  USER_ADD_INFO_THIRD_STEP = "USER_ADD_INFO_THIRD_STEP",
}
