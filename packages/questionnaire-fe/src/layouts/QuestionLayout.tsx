import React from 'react'
import { Outlet } from 'react-router-dom'

const QuestionLayout: React.FC = () => {
  return (
    <div className="h-screen bg-custom-bg-100">
      <Outlet />
    </div>
  )
}

export default QuestionLayout
