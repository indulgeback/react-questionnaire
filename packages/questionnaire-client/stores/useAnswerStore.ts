import { AnswersState } from "@/types/answer";
import { create } from "zustand";

const useAnswerStore = create<AnswersState>((set, get) => ({
  answers: [],
  // 新增或更新答案
  addOrUpdateAnswer: (questionId, value) => {
    const { answers } = get();
    const existingAnswer = answers.find(answer => answer.questionId === questionId);

    if (existingAnswer) {
      // 如果答案已存在，则更新
      set({
        answers: answers.map(answer =>
          answer.questionId === questionId ? { ...answer, value } : answer
        )
      });
    } else {
      // 如果答案不存在，则新增
      set({ answers: [...answers, { questionId, value }] });
    }
  },
  // 清空答案
  clearAnswers: () => set({ answers: [] }),
  // 获取每个题目是否已回答的 boolean 数组
  getAnsweredStatus: questionIds => {
    const { answers } = get();
    return questionIds.map(questionId => answers.some(answer => answer.questionId === questionId));
  }
}));

export default useAnswerStore;
