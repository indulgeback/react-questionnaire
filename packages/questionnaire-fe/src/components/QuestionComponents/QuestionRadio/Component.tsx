import React from 'react'
import { QuestionRadioPropsType, QuestionRadioDefaultProps } from './interface'
import { Radio } from 'antd'

const QuestionRadio: React.FC<QuestionRadioPropsType> = (props: QuestionRadioPropsType) => {
  const { question, options, onChange } = { ...QuestionRadioDefaultProps, ...props }
  return (
    <div className="flex flex-col gap-2 pointer-events-none">
      <div
        className="text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        title={question}
      >
        {question}
      </div>
      <div>
        <Radio.Group options={options} onChange={onChange} />
      </div>
    </div>
  )
}

export default QuestionRadio
