/**
 * @description 矩阵多选题组件
 * @author LeviLiu
 */

import Component from './Component'
import { QuestionMatrixCheckboxDefaultProps } from './interface'

export * from './interface'

export default {
  title: '矩阵多选题',
  type: 'questionMatrixCheckbox',
  Component,
  defaultProps: QuestionMatrixCheckboxDefaultProps
}
