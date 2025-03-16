import React from 'react'
import { QuestionShortAnswerPropsType, QuestionShortAnswerDefaultProps } from './interface'
import { Input } from 'antd'

const QuestionShortAnswer: React.FC<QuestionShortAnswerPropsType> = (
  customProps: QuestionShortAnswerPropsType
) => {
  const { title, type, placeholder, maxLength, rows } = {
    ...QuestionShortAnswerDefaultProps,
    ...customProps
  }
  return (
    <div className="flex flex-col gap-2 pointer-events-none">
      <div
        className="text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        title={title}
      >
        {title}
      </div>
      <div>
        {type === 'text' ? (
          <Input placeholder={placeholder} maxLength={maxLength} />
        ) : (
          <Input.TextArea placeholder={placeholder} maxLength={maxLength} rows={rows} />
        )}
      </div>
    </div>
  )
}

export default QuestionShortAnswer
