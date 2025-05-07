/**
 * @description 日期选择题组件
 * @author LeviLiu
 */

import Component from './Component'
import { QuestionDateDefaultProps } from './interface'

export * from './interface'

export default {
  title: '日期选择题',
  type: 'questionDate',
  Component,
  defaultProps: QuestionDateDefaultProps
}
