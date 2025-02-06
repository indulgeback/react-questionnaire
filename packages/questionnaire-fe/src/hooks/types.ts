export const enum QuestionListType {
  ALL = 'all',
  PERSONAL = 'personal',
  FAVORATE = 'favorate'
}

export type UseLoadQestionListParams = {
  currentView: number
  stepSize: number
  search: string
  type: QuestionListType
}
