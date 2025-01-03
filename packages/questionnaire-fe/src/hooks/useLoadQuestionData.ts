import apis from '@/apis'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'

function useLoadQuestionData() {
  const { id = '' } = useParams()
  const getQuestionData = async () => {
    const res = await apis.questionApi.getQuestionById(+id)
    return res
  }

  const { loading, data, error } = useRequest(getQuestionData)
  return { loading, data, error }
}

export default useLoadQuestionData
