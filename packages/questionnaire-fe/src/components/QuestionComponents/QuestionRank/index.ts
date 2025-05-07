/**
 * @description 排序题组件
 * @author LeviLiu
 */

import Component from './Component'
import { QuestionRankDefaultProps } from './interface'

export * from './interface'

export default {
  title: '排序题',
  type: 'questionRank',
  Component,
  defaultProps: QuestionRankDefaultProps
}
