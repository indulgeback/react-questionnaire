import React from 'react'
import { Outlet } from 'react-router-dom'

const QuestionLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default QuestionLayout
