export type QuestionRadioPropsType = {
  title: string
  options: string[]
  column: boolean
}

export const QuestionRadioDefaultProps: QuestionRadioPropsType = {
  title: '这是一道单选题',
  options: ['选项1', '选项2', '选项3'],
  column: false
}
