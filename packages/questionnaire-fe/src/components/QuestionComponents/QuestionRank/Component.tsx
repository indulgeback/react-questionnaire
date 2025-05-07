import React from 'react'
import { QuestionRankPropsType, QuestionRankDefaultProps } from './interface'
import { DragOutlined } from '@ant-design/icons'

const QuestionRank: React.FC<QuestionRankPropsType> = (customProps: QuestionRankPropsType) => {
  const { title, options } = { ...QuestionRankDefaultProps, ...customProps }

  return (
    <div className="flex flex-col gap-2 pointer-events-none">
      <div
        className="text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        title={title}
      >
        {title}
      </div>
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex items-center p-3 border border-gray-200 rounded bg-white hover:bg-gray-50"
          >
            <div className="mr-2 text-gray-400">
              <DragOutlined />
            </div>
            <div className="flex items-center justify-center w-6 h-6 mr-2 bg-gray-200 rounded-full text-sm">
              {index + 1}
            </div>
            <div>{option}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionRank
