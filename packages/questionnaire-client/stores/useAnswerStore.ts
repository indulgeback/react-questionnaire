import { AnswersState } from "@/types/answer";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// 创建具有持久化和开发工具支持的状态存储
const useAnswerStore = create<AnswersState>()(
  devtools(
    persist(
      (set, get) => ({
        answers: [],

        // 新增或更新答案
        addOrUpdateAnswer: (questionId, value) => {
          const { answers } = get();
          const existingAnswer = answers.find(answer => answer.questionId === questionId);

          // 处理空值情况 - 当用户清除答案时
          if (
            value === "" ||
            value === null ||
            value === undefined ||
            (Array.isArray(value) && value.length === 0) ||
            value === false
          ) {
            // 如果值为空，则移除该答案
            set(state => ({
              answers: state.answers.filter(answer => answer.questionId !== questionId)
            }));
            return;
          }

          // 检查是否是未完成的矩阵题答案（包含__incomplete__标记）
          let isIncompleteMatrix = false;
          if (typeof value === "string") {
            try {
              const parsed = JSON.parse(value);
              if (parsed && typeof parsed === "object" && parsed.__incomplete__ === true) {
                isIncompleteMatrix = true;
              }
            } catch (e) {
              // 不是JSON格式，忽略
            }
          }

          // 如果是未完成的矩阵题，存储数据但不计为已完成
          if (isIncompleteMatrix) {
            // 标记答案为未完成状态但保存数据
            if (existingAnswer) {
              set(state => ({
                answers: state.answers.map(answer =>
                  answer.questionId === questionId
                    ? { ...answer, value, isIncomplete: true }
                    : answer
                )
              }));
            } else {
              set(state => ({
                answers: [...state.answers, { questionId, value, isIncomplete: true }]
              }));
            }
            return;
          }

          if (existingAnswer) {
            // 如果答案已存在，则更新
            set(state => ({
              answers: state.answers.map(answer =>
                answer.questionId === questionId
                  ? { ...answer, value, isIncomplete: false }
                  : answer
              )
            }));
          } else {
            // 如果答案不存在，则新增

            set(state => ({
              answers: [...state.answers, { questionId, value, isIncomplete: false }]
            }));
          }
        },

        // 移除单个答案
        removeAnswer: (questionId: number) => {
          set(state => ({
            answers: state.answers.filter(answer => answer.questionId !== questionId)
          }));
        },

        // 清空所有答案
        clearAnswers: () => {
          set({ answers: [] });
        },

        // 获取每个题目是否已回答的 boolean 数组
        getAnsweredStatus: (questionIds: number[]) => {
          const { answers } = get();
          const status = questionIds.map(questionId => {
            const answer = answers.find(a => a.questionId === questionId);
            // 答案存在且不是未完成状态才算作已回答
            return answer ? !answer.isIncomplete : false;
          });
          return status;
        },

        // 获取特定问题的答案
        getAnswerByQuestionId: (questionId: number) => {
          const { answers } = get();
          return answers.find(answer => answer.questionId === questionId)?.value;
        },

        // 检查问卷是否已完成
        isQuestionnaireComplete: (questionIds: number[]) => {
          const status = get().getAnsweredStatus(questionIds);
          return status.every(Boolean);
        }
      }),
      {
        name: "questionnaire-answers-storage", // 持久化存储的名称
        partialize: state => ({ answers: state.answers }) // 只持久化答案数据
      }
    )
  )
);

export default useAnswerStore;
