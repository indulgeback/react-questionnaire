import React from 'react'

import useLoadQuestionData from '@/hooks/useLoadQuestionData'

const Edit: React.FC = () => {
  const { loading, data } = useLoadQuestionData()
  return (
    <div>
      <h1>Edit</h1>
      <h1>{loading ? <p> loading </p> : <p>{JSON.stringify(data)}</p>}</h1>
    </div>
  )
}

export default Edit
