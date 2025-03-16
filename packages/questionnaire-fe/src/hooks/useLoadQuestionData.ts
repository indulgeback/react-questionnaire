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
      const res = {
        data: {
          components: [
            {
              fe_id: '1',
              type: 'questionShortAnswer',
              title: '输入框',
              props: {
                title: '输入框',
                type: 'text',
                placeholder: '请输入',
                maxLength: 100,
                rows: 4
              }
            },
            {
              fe_id: '2',
              type: 'questionRadio',
              title: '单选题',
              props: {
                title: '单选题',
                options: ['选项1', '选项2', '选项3'],
                column: true
              }
            },
            {
              fe_id: '3',
              type: 'questionCheckbox',
              title: '多选题',
              props: {
                title: '多选题',
                options: ['选项1', '选项2', '选项3'],
                column: false
              }
            }
          ]
        }
      }
      // 模拟请求延迟
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(1)
        }, 1000)
      })
      return res
    },
    {
      manual: true
    }
  )
  const dispatch = useDispatch()
  useEffect(() => {
    if (!data) return
    dispatch(
      resetComponents({
        selectedId: '',
        componentList: data.data.components
      })
    )
  }, [data])

  useEffect(() => {
    run(id)
  }, [id])

  return { loading, data, error }
}

export default useLoadQuestionData
