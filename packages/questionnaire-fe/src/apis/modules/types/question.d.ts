import { ComponentPropsType } from '@/components/QuestionComponents'
import { ComponentInfoType } from '@/store/modules/componentsSlice'

export type Question = {
  answer_count: number
  author: string
  author_id: number
  create_time: Date
  description: string
  id: number
  is_favorated: boolean
  is_published: boolean
  title: string
  update_time: Date
}

export type QuestionListResponse = {
  count: number
  list: Question[]
}

export type QuestionnaireDetail = {
  components: ComponentInfoType[]
  selectedId: string
  version: number
  title: string
  description: string
  footer_text: string
}
