import React from 'react'
import { ComponentInfoType } from '@/store/modules/componentsSlice'
import QuestionShortAnswer from '@/components/QuestionComponents/QuestionShortAnswer/Component'
import QuestionRadio from '@/components/QuestionComponents/QuestionRadio/Component'
import QuestionCheckbox from '@/components/QuestionComponents/QuestionCheckbox/Component'
import QuestionParagraph from '@/components/QuestionComponents/QuestionParagraph/Component'
import QuestionDropdown from '@/components/QuestionComponents/QuestionDropdown/Component'
import QuestionRating from '@/components/QuestionComponents/QuestionRating/Component'
import QuestionNPS from '@/components/QuestionComponents/QuestionNPS/Component'
import QuestionMatrixRadio from '@/components/QuestionComponents/QuestionMatrixRadio/Component'
import QuestionMatrixCheckbox from '@/components/QuestionComponents/QuestionMatrixCheckbox/Component'
import QuestionSlider from '@/components/QuestionComponents/QuestionSlider/Component'
import QuestionDate from '@/components/QuestionComponents/QuestionDate/Component'
import QuestionTitle from '@/components/QuestionComponents/QuestionTitle/Component'

import { QuestionShortAnswerPropsType } from '@/components/QuestionComponents/QuestionShortAnswer'
import { QuestionRadioPropsType } from '@/components/QuestionComponents/QuestionRadio'
import { QuestionCheckboxPropsType } from '@/components/QuestionComponents/QuestionCheckbox'
import { QuestionParagraphPropsType } from '@/components/QuestionComponents/QuestionParagraph'
import { QuestionDropdownPropsType } from '@/components/QuestionComponents/QuestionDropdown'
import { QuestionRatingPropsType } from '@/components/QuestionComponents/QuestionRating'
import { QuestionNPSPropsType } from '@/components/QuestionComponents/QuestionNPS'
import { QuestionMatrixRadioPropsType } from '@/components/QuestionComponents/QuestionMatrixRadio'
import { QuestionMatrixCheckboxPropsType } from '@/components/QuestionComponents/QuestionMatrixCheckbox'
import { QuestionSliderPropsType } from '@/components/QuestionComponents/QuestionSlider'
import { QuestionDatePropsType } from '@/components/QuestionComponents/QuestionDate'
import { QuestionTitlePropsType } from '@/components/QuestionComponents/QuestionTitle'

import { ComponentType } from '@/components/QuestionComponents'

const ComponentRender: React.FC<{ component: ComponentInfoType }> = ({ component }) => {
  const { type, props } = component

  switch (type) {
    case ComponentType.QuestionShortAnswer:
      return <QuestionShortAnswer {...(props as QuestionShortAnswerPropsType)} />
    case ComponentType.QuestionRadio:
      return <QuestionRadio {...(props as QuestionRadioPropsType)} />
    case ComponentType.QuestionCheckbox:
      return <QuestionCheckbox {...(props as QuestionCheckboxPropsType)} />
    case ComponentType.QuestionParagraph:
      return <QuestionParagraph {...(props as QuestionParagraphPropsType)} />
    case ComponentType.QuestionDropdown:
      return <QuestionDropdown {...(props as QuestionDropdownPropsType)} />
    case ComponentType.QuestionRating:
      return <QuestionRating {...(props as QuestionRatingPropsType)} />
    case ComponentType.QuestionNPS:
      return <QuestionNPS {...(props as QuestionNPSPropsType)} />
    case ComponentType.QuestionMatrixRadio:
      return <QuestionMatrixRadio {...(props as QuestionMatrixRadioPropsType)} />
    case ComponentType.QuestionMatrixCheckbox:
      return <QuestionMatrixCheckbox {...(props as QuestionMatrixCheckboxPropsType)} />
    case ComponentType.QuestionSlider:
      return <QuestionSlider {...(props as QuestionSliderPropsType)} />
    case ComponentType.QuestionDate:
      return <QuestionDate {...(props as QuestionDatePropsType)} />
    case ComponentType.QuestionTitle:
      return <QuestionTitle {...(props as QuestionTitlePropsType)} />
  }

  return null
}

export default ComponentRender
