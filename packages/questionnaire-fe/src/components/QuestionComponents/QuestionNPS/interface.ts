export type QuestionNPSPropsType = {
  title: string
  min: number
  max: number
  minLabel: string
  maxLabel: string
}

export const QuestionNPSDefaultProps: QuestionNPSPropsType = {
  title: '这是一道NPS评分题',
  min: 0,
  max: 10,
  minLabel: '不太可能',
  maxLabel: '非常可能'
}
