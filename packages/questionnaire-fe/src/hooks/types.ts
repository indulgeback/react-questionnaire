export const enum QuestionListType {
  all = 'all',
  personal = 'personal',
  star = 'star'
}

export type UseLoadQestionListParams = {
  currentView: number
  stepSize: number
  search: string
  type: QuestionListType
}
