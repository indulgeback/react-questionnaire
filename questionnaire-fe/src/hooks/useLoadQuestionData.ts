import apis from '@/apis'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'

function useLoadQuestionData() {
  const { id = '' } = useParams()
  // const [loading, setLoading] = useState(true)
  // const [questionData, setQuestionData] = useState({})
  const getQuestionData = async () => {
    const data = await apis.getQuestionById(id)
    return data
    // setQuestionData(data)
    // setLoading(false)
  }

  // useEffect(() => {
  //   getQuestionData()
  // }, [])

  const { loading, data, error } = useRequest(getQuestionData)
  return { loading, data, error }
}

export default useLoadQuestionData
