import React from 'react'
import { QuestionInputDefaultProps } from '@/components/QuestionComponents/QuestionInput/interface'
import { QuestionRadioDefaultProps } from '@/components/QuestionComponents/QuestionRadio/interface'
import { QuestionCheckboxDefaultProps } from '@/components/QuestionComponents/QuestionCheckbox/interface'
import ComponentWapper from '@/pages/question/Edit/components/ComponentWapper'
import QuestionInput from '@/components/QuestionComponents/QuestionInput/Component'
import QuestionRadio from '@/components/QuestionComponents/QuestionRadio/Component'
import QuestionCheckbox from '@/components/QuestionComponents/QuestionCheckbox/Component'

const EditCanvas: React.FC = () => {
  return (
    <div className="h-full overflow-y-scroll custom-no-scrollbar">
      <ComponentWapper>
        <QuestionInput {...QuestionInputDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionRadio {...QuestionRadioDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionCheckbox {...QuestionCheckboxDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionInput {...QuestionInputDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionRadio {...QuestionRadioDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionCheckbox {...QuestionCheckboxDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionInput {...QuestionInputDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionRadio {...QuestionRadioDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionCheckbox {...QuestionCheckboxDefaultProps} />
      </ComponentWapper>
      <ComponentWapper>
        <QuestionInput {...QuestionInputDefaultProps} />
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
