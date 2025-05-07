import { ComponentType } from '@/components/QuestionComponents'

// 导入所有组件的默认属性
import { QuestionShortAnswerDefaultProps } from '@/components/QuestionComponents/QuestionShortAnswer'
import { QuestionParagraphDefaultProps } from '@/components/QuestionComponents/QuestionParagraph'
import { QuestionRadioDefaultProps } from '@/components/QuestionComponents/QuestionRadio'
import { QuestionCheckboxDefaultProps } from '@/components/QuestionComponents/QuestionCheckbox'
import { QuestionDropdownDefaultProps } from '@/components/QuestionComponents/QuestionDropdown'
import { QuestionRatingDefaultProps } from '@/components/QuestionComponents/QuestionRating'
import { QuestionNPSDefaultProps } from '@/components/QuestionComponents/QuestionNPS'
import { QuestionMatrixRadioDefaultProps } from '@/components/QuestionComponents/QuestionMatrixRadio'
import { QuestionMatrixCheckboxDefaultProps } from '@/components/QuestionComponents/QuestionMatrixCheckbox'
import { QuestionSliderDefaultProps } from '@/components/QuestionComponents/QuestionSlider'
import { QuestionDateDefaultProps } from '@/components/QuestionComponents/QuestionDate'
import { QuestionUploadDefaultProps } from '@/components/QuestionComponents/QuestionUpload'
import { QuestionImageChoiceDefaultProps } from '@/components/QuestionComponents/QuestionImageChoice'
import { QuestionRankDefaultProps } from '@/components/QuestionComponents/QuestionRank'
import { QuestionTitleDefaultProps } from '@/components/QuestionComponents/QuestionTitle'

// 导入所有组件信息
import QuestionShortAnswerInfo from '@/components/QuestionComponents/QuestionShortAnswer'
import QuestionParagraphInfo from '@/components/QuestionComponents/QuestionParagraph'
import QuestionRadioInfo from '@/components/QuestionComponents/QuestionRadio'
import QuestionCheckboxInfo from '@/components/QuestionComponents/QuestionCheckbox'
import QuestionDropdownInfo from '@/components/QuestionComponents/QuestionDropdown'
import QuestionRatingInfo from '@/components/QuestionComponents/QuestionRating'
import QuestionNPSInfo from '@/components/QuestionComponents/QuestionNPS'
import QuestionMatrixRadioInfo from '@/components/QuestionComponents/QuestionMatrixRadio'
import QuestionMatrixCheckboxInfo from '@/components/QuestionComponents/QuestionMatrixCheckbox'
import QuestionSliderInfo from '@/components/QuestionComponents/QuestionSlider'
import QuestionDateInfo from '@/components/QuestionComponents/QuestionDate'
import QuestionUploadInfo from '@/components/QuestionComponents/QuestionUpload'
import QuestionImageChoiceInfo from '@/components/QuestionComponents/QuestionImageChoice'
import QuestionRankInfo from '@/components/QuestionComponents/QuestionRank'
import QuestionTitleInfo from '@/components/QuestionComponents/QuestionTitle'

/**
 * 根据组件类型获取对应默认属性
 * @param type 组件类型
 * @returns 组件默认属性和标题
 */
export function getComponentDefaultProps(type: string) {
  switch (type) {
    case ComponentType.QuestionShortAnswer:
      return {
        title: QuestionShortAnswerInfo.title,
        props: QuestionShortAnswerDefaultProps
      }
    case ComponentType.QuestionParagraph:
      return {
        title: QuestionParagraphInfo.title,
        props: QuestionParagraphDefaultProps
      }
    case ComponentType.QuestionRadio:
      return {
        title: QuestionRadioInfo.title,
        props: QuestionRadioDefaultProps
      }
    case ComponentType.QuestionCheckbox:
      return {
        title: QuestionCheckboxInfo.title,
        props: QuestionCheckboxDefaultProps
      }
    case ComponentType.QuestionDropdown:
      return {
        title: QuestionDropdownInfo.title,
        props: QuestionDropdownDefaultProps
      }
    case ComponentType.QuestionRating:
      return {
        title: QuestionRatingInfo.title,
        props: QuestionRatingDefaultProps
      }
    case ComponentType.QuestionNPS:
      return {
        title: QuestionNPSInfo.title,
        props: QuestionNPSDefaultProps
      }
    case ComponentType.QuestionMatrixRadio:
      return {
        title: QuestionMatrixRadioInfo.title,
        props: QuestionMatrixRadioDefaultProps
      }
    case ComponentType.QuestionMatrixCheckbox:
      return {
        title: QuestionMatrixCheckboxInfo.title,
        props: QuestionMatrixCheckboxDefaultProps
      }
    case ComponentType.QuestionSlider:
      return {
        title: QuestionSliderInfo.title,
        props: QuestionSliderDefaultProps
      }
    case ComponentType.QuestionDate:
      return {
        title: QuestionDateInfo.title,
        props: QuestionDateDefaultProps
      }
    case ComponentType.QuestionUpload:
      return {
        title: QuestionUploadInfo.title,
        props: QuestionUploadDefaultProps
      }
    case ComponentType.QuestionImageChoice:
      return {
        title: QuestionImageChoiceInfo.title,
        props: QuestionImageChoiceDefaultProps
      }
    case ComponentType.QuestionRank:
      return {
        title: QuestionRankInfo.title,
        props: QuestionRankDefaultProps
      }
    case ComponentType.QuestionTitle:
      return {
        title: QuestionTitleInfo.title,
        props: QuestionTitleDefaultProps
      }
    default:
      return null
  }
}
