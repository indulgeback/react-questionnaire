import React from 'react'

import useLoadQuestionData from '@/hooks/useLoadQuestionData'

const Edit: React.FC = () => {
  const { loading, data } = useLoadQuestionData()
  return (
    <div className="h-full flex flex-col">
      <div className="h-16 bg-custom-bg-300 shadow-md"></div>
      <div className="flex-1 p-3">
        <div className="h-full flex items-center justify-between">
          <div className="bg-custom-bg-300 shadow-md custom-editor-sidebar rounded-r-lg"></div>
          <div className="custom-questionnaire-container"></div>
          <div className="bg-custom-bg-300 shadow-md custom-editor-sidebar rounded-l-lg"></div>
        </div>
      </div>
    </div>
  )
}

export default Edit
