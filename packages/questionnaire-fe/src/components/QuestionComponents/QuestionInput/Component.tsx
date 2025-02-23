import React from 'react'
import { QuestionInputPropsType, QuestionInputDefaultProps } from './interface'
import { Input } from 'antd'

const QuestionInput: React.FC<QuestionInputPropsType> = (props: QuestionInputPropsType) => {
  const { question, placeholder, isTextarea, onChange } = { ...QuestionInputDefaultProps, ...props }
  return (
    <div className="flex flex-col gap-2 pointer-events-none">
      <div
        className="text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        title={question}
      >
        {question}
      </div>
      <div>
        <Input placeholder={placeholder} type={isTextarea ? 'textarea' : 'text'} />
      </div>
    </div>
  )
}

export default QuestionInput
