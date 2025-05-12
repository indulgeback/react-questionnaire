import apis from '@/apis'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resetComponents } from '@/store/modules/componentsSlice'
import { ComponentInfoType } from '@/store/modules/componentsSlice'
import { ComponentType } from '@/components/QuestionComponents'
import useRequestSuccessChecker from '@/hooks/useRequestSuccessChecker'

// 默认问卷组件示例数据
const DEFAULT_COMPONENTS = [
  {
    fe_id: '1',
    type: ComponentType.QuestionTitle,
    title: '分段标题',
    props: {
      title: '问卷题型组件展示',
      level: 2,
      isCenter: true,
      fontSize: 20
    }
  },
  {
    fe_id: '2',
    type: ComponentType.QuestionShortAnswer,
    title: '简答题',
    props: {
      title: '简答题示例',
      type: 'text',
      placeholder: '请输入您的回答',
      maxLength: 100,
      rows: 1
    }
  },
  {
    fe_id: '3',
    type: ComponentType.QuestionParagraph,
    title: '段落题',
    props: {
      title: '段落题示例',
      placeholder: '请输入您的段落回答',
      rows: 4
    }
  },
  {
    fe_id: '4',
    type: ComponentType.QuestionRadio,
    title: '单选题',
    props: {
      title: '单选题示例',
      options: ['选项1', '选项2', '选项3'],
      column: true
    }
  },
  {
    fe_id: '5',
    type: ComponentType.QuestionCheckbox,
    title: '多选题',
    props: {
      title: '多选题示例',
      options: ['选项1', '选项2', '选项3'],
      column: false
    }
  },
  {
    fe_id: '6',
    type: ComponentType.QuestionDropdown,
    title: '下拉选择题',
    props: {
      title: '下拉选择题示例',
      options: ['选项1', '选项2', '选项3', '选项4'],
      placeholder: '请选择一个选项'
    }
  },
  {
    fe_id: '7',
    type: ComponentType.QuestionRating,
    title: '评分题',
    props: {
      title: '评分题示例',
      count: 5,
      allowHalf: true,
      character: 'star'
    }
  },
  {
    fe_id: '8',
    type: ComponentType.QuestionNPS,
    title: 'NPS评分题',
    props: {
      title: 'NPS评分题示例',
      min: 0,
      max: 10,
      minLabel: '不可能',
      maxLabel: '非常可能'
    }
  },
  {
    fe_id: '9',
    type: ComponentType.QuestionMatrixRadio,
    title: '矩阵单选题',
    props: {
      title: '矩阵单选题示例',
      rows: ['体验', '价格', '服务', '品质'],
      columns: ['很满意', '满意', '一般', '不满意']
    }
  },
  {
    fe_id: '10',
    type: ComponentType.QuestionMatrixCheckbox,
    title: '矩阵多选题',
    props: {
      title: '矩阵多选题示例',
      rows: ['设计', '功能', '易用性'],
      columns: ['满足需求', '有待改进', '不满意', '无法使用']
    }
  },
  {
    fe_id: '11',
    type: ComponentType.QuestionSlider,
    title: '滑块题',
    props: {
      title: '滑块题示例',
      min: 0,
      max: 100,
      step: 5,
      showMarks: true,
      defaultValue: 50
    }
  },
  {
    fe_id: '12',
    type: ComponentType.QuestionDate,
    title: '日期选择题',
    props: {
      title: '日期选择题示例',
      placeholder: '请选择日期',
      showTime: false,
      format: 'YYYY-MM-DD'
    }
  },
  {
    fe_id: '13',
    type: ComponentType.QuestionUpload,
    title: '文件上传题',
    props: {
      title: '文件上传题示例',
      maxCount: 3,
      multiple: true,
      fileTypes: ['image/jpeg', 'image/png', 'application/pdf'],
      maxSize: 5
    }
  },
  {
    fe_id: '14',
    type: ComponentType.QuestionImageChoice,
    title: '图片选择题',
    props: {
      title: '图片选择题示例',
      options: [
        {
          value: '1',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          text: '选项1'
        },
        {
          value: '2',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          text: '选项2'
        },
        {
          value: '3',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          text: '选项3'
        }
      ],
      isMultiple: false
    }
  },
  {
    fe_id: '15',
    type: ComponentType.QuestionRank,
    title: '排序题',
    props: {
      title: '排序题示例',
      options: ['选项1', '选项2', '选项3', '选项4']
    }
  },
  {
    fe_id: '16',
    type: ComponentType.QuestionTitle,
    title: '分段标题',
    props: {
      title: '问卷结束，感谢您的参与！',
      level: 3,
      isCenter: true,
      fontSize: 16
    }
  }
] as ComponentInfoType[]

function useLoadQuestionData() {
  const { id = '' } = useParams()
  const { isRequestSuccess } = useRequestSuccessChecker()
  const { loading, data, error, run } = useRequest(
    async (id: string) => {
      if (!id) {
        // 如果没有ID，返回默认数据
        return { data: { components: DEFAULT_COMPONENTS } }
      }

      // 调用获取问卷详情API
      const res = await apis.editorApi.getQuestionnaireDetail(id)
      if (isRequestSuccess(res)) {
        return { data: { components: res.data.components } }
      } else {
        return { data: { components: DEFAULT_COMPONENTS } }
      }
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
