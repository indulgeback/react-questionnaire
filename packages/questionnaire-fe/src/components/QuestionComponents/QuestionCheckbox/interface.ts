export type QuestionCheckboxPropsType = {
  question: string
  options: string[]
  onChange: ((checkedValue: any[]) => void) | undefined
}

export const QuestionCheckboxDefaultProps: QuestionCheckboxPropsType = {
  question: '这是一道多选题',
  options: ['选项1', '选项2', '选项3'],
  onChange: undefined
}
