/**
 * @description 图片选择题组件
 * @author LeviLiu
 */

import Component from './Component'
import { QuestionImageChoiceDefaultProps } from './interface'

export * from './interface'

export default {
  title: '图片选择题',
  type: 'questionImageChoice',
  Component,
  defaultProps: QuestionImageChoiceDefaultProps
}
