import React from 'react'
import { QuestionParagraphPropsType, QuestionParagraphDefaultProps } from './interface'
import { Input } from 'antd'

const { TextArea } = Input

const QuestionParagraph: React.FC<QuestionParagraphPropsType> = (
  customProps: QuestionParagraphPropsType
) => {
  const { title, placeholder, rows } = { ...QuestionParagraphDefaultProps, ...customProps }
  return (
    <div className="flex flex-col gap-2 pointer-events-none">
      <div
        className="text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        title={title}
      >
        {title}
      </div>
      <div>
        <TextArea placeholder={placeholder} rows={rows} className="w-full" />
      </div>
    </div>
  )
}

export default QuestionParagraph
