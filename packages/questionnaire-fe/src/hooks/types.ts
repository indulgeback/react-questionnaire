export const enum QuestionListType {
  all = 'all',
  personal = 'personal',
  FAVORATE = 'favorate'
}

export type UseLoadQestionListParams = {
  currentView: number
  stepSize: number
  search: string
  type: QuestionListType
}
