export type QuestionParagraphPropsType = {
  title: string
  placeholder: string
  rows: number
}

export const QuestionParagraphDefaultProps: QuestionParagraphPropsType = {
  title: '这是一道段落题',
  placeholder: '请输入您的回答',
  rows: 4
}
