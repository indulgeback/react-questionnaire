import React from 'react'
import { QuestionTitlePropsType, QuestionTitleDefaultProps } from './interface'
import { Typography } from 'antd'

const { Title } = Typography

const QuestionTitle: React.FC<QuestionTitlePropsType> = (customProps: QuestionTitlePropsType) => {
  const { title, level, isCenter, fontSize } = {
    ...QuestionTitleDefaultProps,
    ...customProps
  }

  return (
    <div className={`w-full ${isCenter ? 'text-center' : ''}`}>
      <Title
        level={level}
        style={{
          fontSize: `${fontSize}px`,
          marginTop: 0,
          marginBottom: 0
        }}
      >
        {title}
      </Title>
    </div>
  )
}

export default QuestionTitle
