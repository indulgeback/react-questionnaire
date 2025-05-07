export type QuestionMatrixCheckboxPropsType = {
  title: string
  rows: string[]
  columns: string[]
}

export const QuestionMatrixCheckboxDefaultProps: QuestionMatrixCheckboxPropsType = {
  title: '这是一道矩阵多选题',
  rows: ['行选项1', '行选项2', '行选项3'],
  columns: ['列选项1', '列选项2', '列选项3', '列选项4']
}
