import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apis from '@/apis'

const Edit: React.FC = () => {
  const { id = '' } = useParams()
  const [loading, setLoading] = useState(true)
  const [questionData, setQuestionData] = useState({})
  const getQuestionData = async () => {
    const data = await apis.getQuestionById(id)
    setQuestionData(data)
    setLoading(false)
  }

  useEffect(() => {
    getQuestionData()
  }, [])

  return (
    <div>
      <h1>Edit{id}</h1>
    </div>
  )
}

export default Edit
