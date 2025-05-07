import { QuestionCheckboxPropsType } from './QuestionCheckbox'
import { QuestionDatePropsType } from './QuestionDate'
import { QuestionDropdownPropsType } from './QuestionDropdown'
import { QuestionImageChoicePropsType } from './QuestionImageChoice'
import { QuestionMatrixCheckboxPropsType } from './QuestionMatrixCheckbox'
import { QuestionMatrixRadioPropsType } from './QuestionMatrixRadio'
import { QuestionNPSPropsType } from './QuestionNPS'
import { QuestionParagraphPropsType } from './QuestionParagraph'
import { QuestionRadioPropsType } from './QuestionRadio'
import { QuestionRankPropsType } from './QuestionRank'
import { QuestionRatingPropsType } from './QuestionRating'
import { QuestionShortAnswerPropsType } from './QuestionShortAnswer'
import { QuestionSliderPropsType } from './QuestionSlider'
import { QuestionTitlePropsType } from './QuestionTitle'
import { QuestionUploadPropsType } from './QuestionUpload'

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
  | QuestionUploadPropsType
  | QuestionImageChoicePropsType
  | QuestionRankPropsType
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
  QuestionUpload = 'questionUpload',
  QuestionImageChoice = 'questionImageChoice',
  QuestionRank = 'questionRank',
  QuestionTitle = 'questionTitle'
}
