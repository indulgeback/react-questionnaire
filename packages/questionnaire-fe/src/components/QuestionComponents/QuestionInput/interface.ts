export type QuestionInputPropsType = {
  question: string
  placeholder: string
  isTextarea: boolean
  onChange: (value: string) => void
}

export const QuestionInputDefaultProps: QuestionInputPropsType = {
  question: '这是一道简答题wdwabduiawyifhgeuiwhfweoiufhjewiohfiowefjiewojfiowejfiewj',
  placeholder: '请输入',
  isTextarea: false,
  onChange: () => {
    console.log('onChange')
  }
}
