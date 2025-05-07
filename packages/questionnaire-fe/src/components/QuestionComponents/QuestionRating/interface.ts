export type QuestionRatingPropsType = {
  title: string
  count: number
  allowHalf: boolean
  character: 'star' | 'heart'
}

export const QuestionRatingDefaultProps: QuestionRatingPropsType = {
  title: '这是一道评分题',
  count: 5,
  allowHalf: false,
  character: 'star'
}
