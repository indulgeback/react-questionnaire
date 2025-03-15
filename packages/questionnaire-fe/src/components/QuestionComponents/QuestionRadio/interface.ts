export type QuestionRadioPropsType = {
  title: string
  props: {
    options: string[]
    column: boolean
  }
}

export const QuestionRadioDefaultProps: QuestionRadioPropsType = {
  title: '这是一道单选题',
  props: {
    options: ['选项1', '选项2', '选项3'],
    column: false
  }
}
