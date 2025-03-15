import React from 'react'
import { QuestionShortAnswerPropsType, QuestionShortAnswerDefaultProps } from './interface'
import { Input } from 'antd'

const QuestionShortAnswer: React.FC<QuestionShortAnswerPropsType> = (
  customProps: QuestionShortAnswerPropsType
) => {
  const { title, props } = { ...QuestionShortAnswerDefaultProps, ...customProps }
  return (
    <div className="flex flex-col gap-2 pointer-events-none">
      <div
        className="text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        title={title}
      >
        {title}
      </div>
      <div>
        {props.type === 'text' ? (
          <Input placeholder={props.placeholder} maxLength={props.maxLength} />
        ) : (
          <Input.TextArea
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            rows={props.rows}
          />
        )}
      </div>
    </div>
  )
}

export default QuestionShortAnswer
