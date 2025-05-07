/**
 * @description NPS评分题组件
 * @author LeviLiu
 */

import Component from './Component'
import { QuestionNPSDefaultProps } from './interface'

export * from './interface'

export default {
  title: 'NPS评分题',
  type: 'questionNPS',
  Component,
  defaultProps: QuestionNPSDefaultProps
}
