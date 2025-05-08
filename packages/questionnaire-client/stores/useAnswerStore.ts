import { AnswersState } from "@/types/answer";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// 创建具有持久化和开发工具支持的状态存储
const useAnswerStore = create<AnswersState>()(
  devtools(
    persist(
      (set, get) => ({
        answersByQuestionnaire: {},
        currentQuestionnaireId: "1", // 默认问卷ID

        // 设置当前问卷ID
        setCurrentQuestionnaireId: (id: string) => {
          set({ currentQuestionnaireId: id });
        },

        // 新增或更新答案
        addOrUpdateAnswer: (questionId, value, questionType) => {
          const { answersByQuestionnaire, currentQuestionnaireId } = get();
          const currentAnswers = answersByQuestionnaire[currentQuestionnaireId] || [];
          const existingAnswer = currentAnswers.find(answer => answer.questionId === questionId);

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
              answersByQuestionnaire: {
                ...state.answersByQuestionnaire,
                [currentQuestionnaireId]: currentAnswers.filter(
                  answer => answer.questionId !== questionId
                )
              }
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
                answersByQuestionnaire: {
                  ...state.answersByQuestionnaire,
                  [currentQuestionnaireId]: currentAnswers.map(answer =>
                    answer.questionId === questionId
                      ? { ...answer, value, isIncomplete: true, questionType }
                      : answer
                  )
                }
              }));
            } else {
              set(state => ({
                answersByQuestionnaire: {
                  ...state.answersByQuestionnaire,
                  [currentQuestionnaireId]: [
                    ...currentAnswers,
                    { questionId, value, isIncomplete: true, questionType }
                  ]
                }
              }));
            }
            return;
          }

          if (existingAnswer) {
            // 如果答案已存在，则更新
            set(state => ({
              answersByQuestionnaire: {
                ...state.answersByQuestionnaire,
                [currentQuestionnaireId]: currentAnswers.map(answer =>
                  answer.questionId === questionId
                    ? { ...answer, value, isIncomplete: false }
                    : answer
                )
              }
            }));
          } else {
            // 如果答案不存在，则新增
            set(state => ({
              answersByQuestionnaire: {
                ...state.answersByQuestionnaire,
                [currentQuestionnaireId]: [
                  ...currentAnswers,
                  { questionId, value, isIncomplete: false, questionType }
                ]
              }
            }));
          }
        },

        // 移除单个答案
        removeAnswer: (questionId: number) => {
          const { answersByQuestionnaire, currentQuestionnaireId } = get();
          const currentAnswers = answersByQuestionnaire[currentQuestionnaireId] || [];

          set(state => ({
            answersByQuestionnaire: {
              ...state.answersByQuestionnaire,
              [currentQuestionnaireId]: currentAnswers.filter(
                answer => answer.questionId !== questionId
              )
            }
          }));
        },

        // 清空当前问卷的所有答案
        clearAnswers: () => {
          const { answersByQuestionnaire, currentQuestionnaireId } = get();

          set({
            answersByQuestionnaire: {
              ...answersByQuestionnaire,
              [currentQuestionnaireId]: []
            }
          });
        },

        // 获取每个题目是否已回答的 boolean 数组
        getAnsweredStatus: (questionIds: number[]) => {
          const { answersByQuestionnaire, currentQuestionnaireId } = get();
          const currentAnswers = answersByQuestionnaire[currentQuestionnaireId] || [];

          const status = questionIds.map(questionId => {
            const answer = currentAnswers.find(a => a.questionId === questionId);
            // 答案存在且不是未完成状态才算作已回答
            return answer ? !answer.isIncomplete : false;
          });
          return status;
        },

        // 获取特定问题的答案
        getAnswerByQuestionId: (questionId: number) => {
          const { answersByQuestionnaire, currentQuestionnaireId } = get();
          const currentAnswers = answersByQuestionnaire[currentQuestionnaireId] || [];

          return currentAnswers.find(answer => answer.questionId === questionId)?.value;
        },

        // 检查问卷是否已完成
        isQuestionnaireComplete: (questionIds: number[]) => {
          const status = get().getAnsweredStatus(questionIds);
          return status.every(Boolean);
        },

        // 获取当前问卷的全部答案数据
        getAllAnswers: () => {
          const { answersByQuestionnaire, currentQuestionnaireId } = get();
          return answersByQuestionnaire[currentQuestionnaireId] || [];
        },

        // 获取特定问卷的所有答案
        getAnswersByQuestionnaireId: (questionnaireId: string) => {
          const { answersByQuestionnaire } = get();
          return answersByQuestionnaire[questionnaireId] || [];
        }
      }),
      {
        name: "questionnaire-answers-storage", // 持久化存储的名称
        partialize: state => ({
          answersByQuestionnaire: state.answersByQuestionnaire,
          currentQuestionnaireId: state.currentQuestionnaireId
        }) // 只持久化答案数据和当前问卷ID
      }
    )
  )
);

export default useAnswerStore;
