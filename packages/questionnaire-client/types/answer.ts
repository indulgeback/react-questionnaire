export type Answer = {
  questionId: number; // 题目 ID
  value: string | string[] | boolean; // 用户填写的答案
  isIncomplete?: boolean; // 标记答案是否未完成（用于矩阵题）
};

export type AnswersState = {
  answers: Answer[];

  addOrUpdateAnswer: (questionId: number, value: string | string[] | boolean) => void;
  removeAnswer: (questionId: number) => void;
  clearAnswers: () => void;
  getAnsweredStatus: (questionIds: number[]) => boolean[];
  getAnswerByQuestionId: (questionId: number) => string | string[] | boolean | undefined;
  isQuestionnaireComplete: (questionIds: number[]) => boolean;
};
