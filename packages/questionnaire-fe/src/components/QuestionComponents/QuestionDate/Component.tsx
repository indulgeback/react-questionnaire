import React from 'react'
import { QuestionDatePropsType, QuestionDateDefaultProps } from './interface'
import { DatePicker } from 'antd'

const QuestionDate: React.FC<QuestionDatePropsType> = (customProps: QuestionDatePropsType) => {
  const { title, placeholder, showTime, format } = {
    ...QuestionDateDefaultProps,
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
        <DatePicker
          style={{ width: '100%' }}
          placeholder={placeholder}
          showTime={showTime}
          format={format}
        />
      </div>
    </div>
  )
}

export default QuestionDate
