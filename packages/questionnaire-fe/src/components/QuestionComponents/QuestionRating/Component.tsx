import React from 'react'
import { QuestionRatingPropsType, QuestionRatingDefaultProps } from './interface'
import { Rate } from 'antd'
import { HeartOutlined, StarOutlined } from '@ant-design/icons'

const QuestionRating: React.FC<QuestionRatingPropsType> = (
  customProps: QuestionRatingPropsType
) => {
  const { title, count, allowHalf, character } = { ...QuestionRatingDefaultProps, ...customProps }
  return (
    <div className="flex flex-col gap-2 pointer-events-none">
      <div
        className="text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        title={title}
      >
        {title}
      </div>
      <div>
        <Rate
          count={count}
          allowHalf={allowHalf}
          character={character === 'heart' ? <HeartOutlined /> : <StarOutlined />}
        />
      </div>
    </div>
  )
}

export default QuestionRating
