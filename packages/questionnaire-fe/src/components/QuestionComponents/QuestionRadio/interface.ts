import { RadioChangeEvent } from 'antd'

export type QuestionRadioPropsType = {
  question: string
  options: string[]
  onChange: ((e: RadioChangeEvent) => void) | undefined
}

export const QuestionRadioDefaultProps: QuestionRadioPropsType = {
  question: '这是一道单选题',
  options: ['选项1', '选项2', '选项3'],
  onChange: undefined
}
