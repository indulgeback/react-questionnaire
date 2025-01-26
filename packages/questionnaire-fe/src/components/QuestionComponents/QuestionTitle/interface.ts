export type QuestionTitlePropsType = {
  title: string
  level: 1 | 2 | 3 | 4 | 5
  isCenter: boolean
}

export const QuestionTitleDefaultProps: QuestionTitlePropsType = {
  title: '问题',
  level: 1,
  isCenter: false
}
