import React from 'react'
import { QuestionCheckboxPropsType, QuestionCheckboxDefaultProps } from './interface'
import { Checkbox } from 'antd'

const QuestionCheckbox: React.FC<QuestionCheckboxPropsType> = (
  props: QuestionCheckboxPropsType
) => {
  const { question, options, onChange } = { ...QuestionCheckboxDefaultProps, ...props }
  return (
    <div className="flex flex-col gap-2 pointer-events-none">
      <div
        className="text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        title={question}
      >
        {question}
      </div>
      <div>
        <Checkbox.Group options={options} onChange={onChange} />
      </div>
    </div>
  )
}

export default QuestionCheckbox
