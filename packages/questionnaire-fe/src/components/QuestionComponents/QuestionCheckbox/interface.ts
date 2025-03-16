export type QuestionCheckboxPropsType = {
  title: string
  options: string[]
  column: boolean
}

export const QuestionCheckboxDefaultProps: QuestionCheckboxPropsType = {
  title: '这是一道多选题',
  options: ['选项1', '选项2', '选项3'],
  column: false
}
