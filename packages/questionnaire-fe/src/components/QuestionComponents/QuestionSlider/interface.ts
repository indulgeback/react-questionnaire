export type QuestionSliderPropsType = {
  title: string
  min: number
  max: number
  step: number
  showMarks: boolean
  defaultValue: number
  disabled?: boolean
}

export const QuestionSliderDefaultProps: QuestionSliderPropsType = {
  title: '这是一道滑块题',
  min: 0,
  max: 100,
  step: 1,
  showMarks: true,
  defaultValue: 50,
  disabled: true // 默认禁用交互
}
