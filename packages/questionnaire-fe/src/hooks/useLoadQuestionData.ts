import apis from '@/apis'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resetComponents } from '@/store/modules/componentsSlice'

function useLoadQuestionData() {
  const { id = '' } = useParams()

  const { loading, data, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error('id is required')
      const res = await apis.questionApi.getQuestionById(+id)
      return res
    },
    {
      manual: true
    }
  )
  const dispatch = useDispatch()
  useEffect(() => {
    if (!data) return
    dispatch(resetComponents({ componentList: data.data.components || [] }))
  }, [data])

  useEffect(() => {
    run(id)
  }, [id])

  return { loading, data, error }
}

export default useLoadQuestionData
