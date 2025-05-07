export type ImageOption = {
  value: string
  url: string
  text: string
}

export type QuestionImageChoicePropsType = {
  title: string
  options: ImageOption[]
  isMultiple: boolean
}

export const QuestionImageChoiceDefaultProps: QuestionImageChoicePropsType = {
  title: '这是一道图片选择题',
  options: [
    {
      value: '1',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      text: '选项1'
    },
    {
      value: '2',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      text: '选项2'
    },
    {
      value: '3',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      text: '选项3'
    }
  ],
  isMultiple: false
}
