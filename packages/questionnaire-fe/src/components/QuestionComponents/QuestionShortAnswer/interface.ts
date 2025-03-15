export type QuestionShortAnswerPropsType = {
  title: string
  props: {
    type: 'text' | 'textarea'
    placeholder: string
    maxLength: number
    rows: number
  }
}

export const QuestionShortAnswerDefaultProps: QuestionShortAnswerPropsType = {
  title: '简答题',
  props: {
    type: 'textarea',
    placeholder: '请输入答案',
    maxLength: 100,
    rows: 4
  }
}
