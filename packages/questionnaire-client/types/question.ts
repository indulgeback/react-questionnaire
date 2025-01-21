export enum QuestionType {
  BASE_INFO = "base_info",
  MULTIPLE_CHOICE = "multiple_choice",
  SINGLE_CHOICE = "single_choice",
  TRUE_OR_FALSE = "true_or_false"
}

export type Question = {
  id: number;
  type: QuestionType | string;
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
  [QuestionType.TRUE_OR_FALSE]: "判断题"
};
