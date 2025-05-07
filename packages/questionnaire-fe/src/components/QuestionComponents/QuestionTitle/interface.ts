export type QuestionTitlePropsType = {
  title: string
  level: 1 | 2 | 3 | 4 | 5
  isCenter: boolean
  fontSize: number
}

export const QuestionTitleDefaultProps: QuestionTitlePropsType = {
  title: '这是一个分段标题',
  level: 3,
  isCenter: false,
  fontSize: 16
}
