import { QuestionCheckboxPropsType } from './QuestionCheckbox'
import { QuestionDatePropsType } from './QuestionDate'
import { QuestionDropdownPropsType } from './QuestionDropdown'
import { QuestionMatrixCheckboxPropsType } from './QuestionMatrixCheckbox'
import { QuestionMatrixRadioPropsType } from './QuestionMatrixRadio'
import { QuestionNPSPropsType } from './QuestionNPS'
import { QuestionParagraphPropsType } from './QuestionParagraph'
import { QuestionRadioPropsType } from './QuestionRadio'
import { QuestionRatingPropsType } from './QuestionRating'
import { QuestionShortAnswerPropsType } from './QuestionShortAnswer'
import { QuestionSliderPropsType } from './QuestionSlider'
import { QuestionTitlePropsType } from './QuestionTitle'

export type ComponentPropsType =
  | QuestionShortAnswerPropsType
  | QuestionRadioPropsType
  | QuestionCheckboxPropsType
  | QuestionParagraphPropsType
  | QuestionDropdownPropsType
  | QuestionRatingPropsType
  | QuestionNPSPropsType
  | QuestionMatrixRadioPropsType
  | QuestionMatrixCheckboxPropsType
  | QuestionSliderPropsType
  | QuestionDatePropsType
  | QuestionTitlePropsType

export enum ComponentType {
  QuestionShortAnswer = 'questionShortAnswer',
  QuestionRadio = 'questionRadio',
  QuestionCheckbox = 'questionCheckbox',
  QuestionParagraph = 'questionParagraph',
  QuestionDropdown = 'questionDropdown',
  QuestionRating = 'questionRating',
  QuestionNPS = 'questionNPS',
  QuestionMatrixRadio = 'questionMatrixRadio',
  QuestionMatrixCheckbox = 'questionMatrixCheckbox',
  QuestionSlider = 'questionSlider',
  QuestionDate = 'questionDate',
  QuestionTitle = 'questionTitle'
}
