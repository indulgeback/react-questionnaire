/**
 * @description 单选题组件
 * @author LeviLiu
 */

import Component from './Component'
import { QuestionRadioDefaultProps } from './interface'

export * from './interface'

export default {
  title: '单选题',
  type: 'questionRadio',
  Component,
  defaultProps: QuestionRadioDefaultProps
}
