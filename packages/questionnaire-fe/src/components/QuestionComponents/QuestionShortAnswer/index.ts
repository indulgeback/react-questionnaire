/**
 * @description 简答题组件
 * @author LeviLiu
 */

import Component from './Component'
import { QuestionShortAnswerDefaultProps } from './interface'

export * from './interface'

export default {
  title: '简答题',
  type: 'questionShortAnswer',
  Component,
  defaultProps: QuestionShortAnswerDefaultProps
}
