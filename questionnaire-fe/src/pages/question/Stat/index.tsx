import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import React from 'react'

const Stat: React.FC = () => {
  const { loading, data } = useLoadQuestionData()
  return (
    <div>
      <h1>Stat</h1>
      <h1>{loading ? <p> loading </p> : <p>{JSON.stringify(data)}</p>}</h1>
    </div>
  )
}

export default Stat
