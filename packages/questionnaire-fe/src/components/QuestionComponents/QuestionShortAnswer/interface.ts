export type QuestionShortAnswerPropsType = {
  title: string
  type: string
  placeholder: string
  maxLength: number
  rows: number
}

export const QuestionShortAnswerDefaultProps: QuestionShortAnswerPropsType = {
  title: '简答题',
  type: 'textarea',
  placeholder: '请输入答案',
  maxLength: 100,
  rows: 4
}
