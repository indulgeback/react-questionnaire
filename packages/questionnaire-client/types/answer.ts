export type Answer = {
  questionId: number; // 题目 ID
  value: string | string[] | boolean; // 用户填写的答案
};

export type AnswersState = {
  answers: Answer[];

  addOrUpdateAnswer: (questionId: number, value: string | string[] | boolean) => void;
  clearAnswers: () => void;
  getAnsweredStatus: (questionIds: number[]) => boolean[];
};
