/**
 * @description 分段标题组件
 * @author LeviLiu
 */

import Component from './Component'
import { QuestionTitleDefaultProps } from './interface'

export * from './interface'

export default {
  title: '分段标题',
  type: 'questionTitle',
  Component,
  defaultProps: QuestionTitleDefaultProps
}
