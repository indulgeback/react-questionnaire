import { QuestionType } from "./question";

export type Answer = {
  questionId: number; // 题目 ID
  value: string | string[] | boolean; // 用户填写的答案
  isIncomplete?: boolean; // 标记答案是否未完成（用于矩阵题）
  questionType: QuestionType; // 题目类型
};

export interface AnswersByQuestionnaire {
  [questionnaireId: string]: Answer[]; // 按问卷ID组织答案
}

export type AnswersState = {
  answersByQuestionnaire: AnswersByQuestionnaire; // 存储所有问卷的答案
  currentQuestionnaireId: string; // 当前问卷ID

  // 设置当前问卷ID
  setCurrentQuestionnaireId: (id: string) => void;

  // 添加或更新答案
  addOrUpdateAnswer: (
    questionId: number,
    value: string | string[] | boolean,
    questionType: QuestionType
  ) => void;

  // 移除答案
  removeAnswer: (questionId: number) => void;

  // 清空当前问卷的所有答案
  clearAnswers: () => void;

  // 获取当前问卷的回答状态
  getAnsweredStatus: (questionIds: number[]) => boolean[];

  // 获取当前问卷中特定问题的答案
  getAnswerByQuestionId: (questionId: number) => string | string[] | boolean | undefined;

  // 检查当前问卷是否已完成
  isQuestionnaireComplete: (questionIds: number[]) => boolean;

  // 获取当前问卷的所有答案
  getAllAnswers: () => Answer[];

  // 获取特定问卷的所有答案
  getAnswersByQuestionnaireId: (questionnaireId: string) => Answer[];
};
