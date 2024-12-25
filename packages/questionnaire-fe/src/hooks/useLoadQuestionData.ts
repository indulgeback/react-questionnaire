import apis from '@/apis'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'

function useLoadQuestionData() {
  const { id = '' } = useParams()
  const getQuestionData = async () => {
    const data = await apis.questionApi.getQuestionById(+id)
    return data
  }

  const { loading, data, error } = useRequest(getQuestionData)
  return { loading, data, error }
}

export default useLoadQuestionData
