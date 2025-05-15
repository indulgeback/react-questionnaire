// 饼图数据（单选题、下拉选择题）
export const mockPieChartData = {
  question: '您是否经历过校园暴力？',
  data: [
    { option: '经常经历', count: 120, percentage: 18.2 },
    { option: '偶尔经历', count: 280, percentage: 42.4 },
    { option: '从未经历', count: 250, percentage: 37.9 },
    { option: '不确定', count: 30, percentage: 4.5 }
  ]
}

// 柱状图数据（多选题）
export const mockBarChartData = {
  question: '您认为校园暴力的主要施暴者是？',
  data: [
    { option: '同班同学', count: 380, percentage: 57.6 },
    { option: '高年级学生', count: 220, percentage: 33.3 },
    { option: '校外人员', count: 150, percentage: 22.7 },
    { option: '教师', count: 25, percentage: 3.8 }
  ]
}

// 评分数据（评分题、NPS题、滑块题）
export const mockRatingData = {
  question: '您遭遇暴力时的心理状态评分（1-5分）',
  data: [
    { score: 5, count: 280, percentage: 42.4 },
    { score: 4, count: 220, percentage: 33.3 },
    { score: 3, count: 120, percentage: 18.2 },
    { score: 2, count: 50, percentage: 7.6 },
    { score: 1, count: 30, percentage: 4.5 }
  ],
  maxScore: 5
}

// 矩阵数据（矩阵单选题、矩阵多选题）
export const mockMatrixData = {
  question: '请评价以下措施对减少校园暴力的效果',
  data: [
    { row: '加强监控', column: '非常有效', count: 230, percentage: 34.8 },
    { row: '加强监控', column: '有效', count: 180, percentage: 27.3 },
    { row: '加强监控', column: '一般', count: 120, percentage: 18.2 },
    { row: '加强监控', column: '无效', count: 130, percentage: 19.7 },

    { row: '心理咨询', column: '非常有效', count: 320, percentage: 48.5 },
    { row: '心理咨询', column: '有效', count: 200, percentage: 30.3 },
    { row: '心理咨询', column: '一般', count: 80, percentage: 12.1 },
    { row: '心理咨询', column: '无效', count: 60, percentage: 9.1 },

    { row: '严格惩罚', column: '非常有效', count: 400, percentage: 60.6 },
    { row: '严格惩罚', column: '有效', count: 150, percentage: 22.7 },
    { row: '严格惩罚', column: '一般', count: 70, percentage: 10.6 },
    { row: '严格惩罚', column: '无效', count: 40, percentage: 6.1 },

    { row: '家校合作', column: '非常有效', count: 350, percentage: 53.0 },
    { row: '家校合作', column: '有效', count: 170, percentage: 25.8 },
    { row: '家校合作', column: '一般', count: 90, percentage: 13.6 },
    { row: '家校合作', column: '无效', count: 50, percentage: 7.6 }
  ],
  rows: ['加强监控', '心理咨询', '严格惩罚', '家校合作'],
  columns: ['非常有效', '有效', '一般', '无效']
}

// 词云数据（简答题、段落题）
export const mockWordCloudData = {
  question: '您希望学校采取哪些措施？',
  data: [
    { text: '加强安保', value: 32, name: '加强安保' },
    { text: '心理辅导', value: 28, name: '心理辅导' },
    { text: '反暴力教育', value: 25, name: '反暴力教育' },
    { text: '匿名举报', value: 20, name: '匿名举报' },
    { text: '严惩施暴者', value: 18, name: '严惩施暴者' },
    { text: '监控系统', value: 16, name: '监控系统' },
    { text: '家校合作', value: 15, name: '家校合作' },
    { text: '心理咨询', value: 14, name: '心理咨询' },
    { text: '预防机制', value: 13, name: '预防机制' },
    { text: '班主任负责', value: 12, name: '班主任负责' },
    { text: '家长教育', value: 11, name: '家长教育' },
    { text: '学生自治', value: 10, name: '学生自治' },
    { text: '定期检查', value: 9, name: '定期检查' },
    { text: '校园文化', value: 8, name: '校园文化' },
    { text: '法律援助', value: 7, name: '法律援助' }
  ],
  responseCount: 450
}

// 日期数据（日期题）
export const mockDateData = {
  question: '您最近一次遭遇校园暴力的时间？',
  data: [
    { range: '2023-01', count: 35, percentage: 5.3 },
    { range: '2023-02', count: 42, percentage: 6.4 },
    { range: '2023-03', count: 51, percentage: 7.7 },
    { range: '2023-04', count: 67, percentage: 10.2 },
    { range: '2023-05', count: 84, percentage: 12.7 },
    { range: '2023-06', count: 58, percentage: 8.8 },
    { range: '2023-07', count: 45, percentage: 6.8 },
    { range: '2023-08', count: 32, percentage: 4.8 },
    { range: '2023-09', count: 75, percentage: 11.4 },
    { range: '2023-10', count: 91, percentage: 13.8 },
    { range: '2023-11', count: 62, percentage: 9.4 },
    { range: '2023-12', count: 18, percentage: 2.7 }
  ],
  responseCount: 660,
  earliestDate: '2023-01-01',
  latestDate: '2023-12-31',
  mostFrequentDate: {
    date: '2023-10-15',
    count: 25
  }
}
