import React from 'react'
import { ComponentInfoType } from '@/store/modules/componentsSlice'
import QuestionShortAnswer from '@/components/QuestionComponents/QuestionShortAnswer/Component'
import QuestionRadio from '@/components/QuestionComponents/QuestionRadio/Component'
import QuestionCheckbox from '@/components/QuestionComponents/QuestionCheckbox/Component'
import { QuestionShortAnswerPropsType } from '@/components/QuestionComponents/QuestionShortAnswer'
import { QuestionRadioPropsType } from '@/components/QuestionComponents/QuestionRadio'
import { QuestionCheckboxPropsType } from '@/components/QuestionComponents/QuestionCheckbox'
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
  }

  return null
}

export default ComponentRender
