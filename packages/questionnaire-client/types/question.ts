export enum QuestionType {
  BASE_INFO = "base_info",
  MULTIPLE_CHOICE = "multiple_choice",
  SINGLE_CHOICE = "single_choice",
  TRUE_FALSE = "true_false",
  SHORT_ANSWER = "short_answer"
}

export type Question = {
  id: number;
  type: QuestionType;
  question: string;
  placeholder?: string;
  options?: string[];
};

export type QuestionContextType = {
  questionList: Question[];
  question: Question;
  index: number;
};

export const questionTypeMap = {
  [QuestionType.BASE_INFO]: "基础信息",
  [QuestionType.MULTIPLE_CHOICE]: "多选题",
  [QuestionType.SINGLE_CHOICE]: "单选题",
  [QuestionType.TRUE_FALSE]: "判断题",
  [QuestionType.SHORT_ANSWER]: "简答题"
};
