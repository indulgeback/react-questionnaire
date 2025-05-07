/**
 * @description 评分题组件
 * @author LeviLiu
 */

import Component from './Component'
import { QuestionRatingDefaultProps } from './interface'

export * from './interface'

export default {
  title: '评分题',
  type: 'questionRating',
  Component,
  defaultProps: QuestionRatingDefaultProps
}
