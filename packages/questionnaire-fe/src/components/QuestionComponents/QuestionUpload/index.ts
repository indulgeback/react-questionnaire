/**
 * @description 文件上传题组件
 * @author LeviLiu
 */

import Component from './Component'
import { QuestionUploadDefaultProps } from './interface'

export * from './interface'

export default {
  title: '文件上传题',
  type: 'questionUpload',
  Component,
  defaultProps: QuestionUploadDefaultProps
}
