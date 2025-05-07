/**
 * @description 下拉选择题组件
 * @author LeviLiu
 */

import Component from './Component'
import { QuestionDropdownDefaultProps } from './interface'

export * from './interface'

export default {
  title: '下拉选择题',
  type: 'questionDropdown',
  Component,
  defaultProps: QuestionDropdownDefaultProps
}
