import React from 'react'
import { QuestionTitlePropsType } from './interface'

const QuestionTitle: React.FC<QuestionTitlePropsType> = props => {
  const { title, level, isCenter } = props
  return <div>QuestionTitle</div>
}

export default QuestionTitle
