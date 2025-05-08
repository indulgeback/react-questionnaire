import { QuestionType } from "./question";

export type Answer = {
  questionId: number; // 题目 ID
  value: string | string[] | boolean; // 用户填写的答案
  isIncomplete?: boolean; // 标记答案是否未完成（用于矩阵题）
  questionType: QuestionType; // 题目类型
};

export type AnswersState = {
  answers: Answer[];

  addOrUpdateAnswer: (
    questionId: number,
    value: string | string[] | boolean,
    questionType: QuestionType
  ) => void;
  removeAnswer: (questionId: number) => void;
  clearAnswers: () => void;
  getAnsweredStatus: (questionIds: number[]) => boolean[];
  getAnswerByQuestionId: (questionId: number) => string | string[] | boolean | undefined;
  isQuestionnaireComplete: (questionIds: number[]) => boolean;
  getAllAnswers: () => Answer[];
};
