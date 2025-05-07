/**
 * @description 矩阵单选题组件
 * @author LeviLiu
 */

import Component from './Component'
import { QuestionMatrixRadioDefaultProps } from './interface'

export * from './interface'

export default {
  title: '矩阵单选题',
  type: 'questionMatrixRadio',
  Component,
  defaultProps: QuestionMatrixRadioDefaultProps
}
