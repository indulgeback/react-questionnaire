import { QuestionCheckboxPropsType } from './QuestionCheckbox'
import { QuestionRadioPropsType } from './QuestionRadio'
import { QuestionShortAnswerPropsType } from './QuestionShortAnswer'

export type ComponentPropsType =
  | QuestionShortAnswerPropsType
  | QuestionRadioPropsType
  | QuestionCheckboxPropsType

export enum ComponentType {
  QuestionShortAnswer = 'questionShortAnswer',
  QuestionRadio = 'questionRadio',
  QuestionCheckbox = 'questionCheckbox'
}
