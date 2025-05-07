export type QuestionDropdownPropsType = {
  title: string
  options: string[]
  placeholder: string
}

export const QuestionDropdownDefaultProps: QuestionDropdownPropsType = {
  title: '这是一道下拉选择题',
  options: ['选项1', '选项2', '选项3'],
  placeholder: '请选择'
}
