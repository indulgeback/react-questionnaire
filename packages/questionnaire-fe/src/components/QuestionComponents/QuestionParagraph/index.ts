/**
 * @description 段落题组件
 * @author LeviLiu
 */

import Component from './Component'
import { QuestionParagraphDefaultProps } from './interface'

export * from './interface'

export default {
  title: '段落题',
  type: 'questionParagraph',
  Component,
  defaultProps: QuestionParagraphDefaultProps
}
