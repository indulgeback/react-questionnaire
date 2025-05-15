import PieChartStat from './PieChartStat'
import BarChartStat from './BarChartStat'
import RatingStat from './RatingStat'
import MatrixStat from './MatrixStat'
import WordCloudStat from './WordCloudStat'
import DateStat from './DateStat'

// 将统计组件与题型对应
export const StatComponents = {
  // 单选题相关
  questionRadio: PieChartStat,
  questionDropdown: PieChartStat,

  // 多选题相关
  questionCheckbox: BarChartStat,

  // 评分类相关
  questionRating: RatingStat,
  questionNPS: RatingStat,
  questionSlider: RatingStat,

  // 矩阵类相关
  questionMatrixRadio: MatrixStat,
  questionMatrixCheckbox: MatrixStat,

  // 文本类相关
  questionShortAnswer: WordCloudStat,
  questionParagraph: WordCloudStat,

  // 日期相关
  questionDate: DateStat,

  // 标题不需要统计
  questionTitle: null
}

export { PieChartStat, BarChartStat, RatingStat, MatrixStat, WordCloudStat, DateStat }
