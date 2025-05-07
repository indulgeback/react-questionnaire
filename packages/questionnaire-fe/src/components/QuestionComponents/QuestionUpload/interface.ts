export type QuestionUploadPropsType = {
  title: string
  maxCount: number
  multiple: boolean
  fileTypes: string[]
  maxSize: number // 单位MB
}

export const QuestionUploadDefaultProps: QuestionUploadPropsType = {
  title: '这是一道文件上传题',
  maxCount: 3,
  multiple: true,
  fileTypes: ['image/jpeg', 'image/png', 'application/pdf'],
  maxSize: 5
}
