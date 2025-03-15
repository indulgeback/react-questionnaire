/**
 * @description 多选题组件
 * @author LeviLiu
 */

import Component from './Component'
import { QuestionCheckboxDefaultProps } from './interface'

export * from './interface'

export default {
  title: '多选题',
  type: 'questionCheckbox',
  Component,
  defaultProps: QuestionCheckboxDefaultProps
}
