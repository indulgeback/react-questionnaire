import React from 'react'
import { QuestionRadioDefaultProps } from '@/components/QuestionComponents/QuestionRadio/interface'
import { QuestionCheckboxDefaultProps } from '@/components/QuestionComponents/QuestionCheckbox/interface'
import { QuestionShortAnswerDefaultProps } from '@/components/QuestionComponents/QuestionShortAnswer/interface'
import ComponentWapper from '@/pages/question/Edit/components/ComponentWapper'
import QuestionRadio from '@/components/QuestionComponents/QuestionRadio/Component'
import QuestionCheckbox from '@/components/QuestionComponents/QuestionCheckbox/Component'
import QuestionShortAnswer from '@/components/QuestionComponents/QuestionShortAnswer/Component'

const EditCanvas: React.FC = () => {
  return (
    <div className="h-full overflow-y-scroll custom-no-scrollbar">
      <ComponentWapper>
        <QuestionShortAnswer {...QuestionShortAnswerDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionRadio {...QuestionRadioDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionCheckbox {...QuestionCheckboxDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionShortAnswer {...QuestionShortAnswerDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionRadio {...QuestionRadioDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionCheckbox {...QuestionCheckboxDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionShortAnswer {...QuestionShortAnswerDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionRadio {...QuestionRadioDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionCheckbox {...QuestionCheckboxDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionShortAnswer {...QuestionShortAnswerDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionRadio {...QuestionRadioDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionCheckbox {...QuestionCheckboxDefaultProps} />
      </ComponentWapper>
    </div>
  )
}

export default EditCanvas
