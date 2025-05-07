export type QuestionDatePropsType = {
  title: string
  placeholder: string
  showTime: boolean
  format: string
}

export const QuestionDateDefaultProps: QuestionDatePropsType = {
  title: '这是一道日期选择题',
  placeholder: '请选择日期',
  showTime: false,
  format: 'YYYY-MM-DD'
}
