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
  question: Question;
  index: number;
};
