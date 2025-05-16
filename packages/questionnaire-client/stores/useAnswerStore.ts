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
        addOrUpdateAnswer: (fe_id, value, questionType) => {
          const { answersByQuestionnaire, currentQuestionnaireId } = get();
          const currentAnswers = answersByQuestionnaire[currentQuestionnaireId] || [];

          // 确保fe_id存在，如果不存在则创建一个
          const ensuredFeId = fe_id;

          // 使用两种ID进行匹配，优先使用fe_id
          const existingAnswer = currentAnswers.find(
            answer => answer.fe_id && answer.fe_id === ensuredFeId
          );

          // 处理空值情况 - 当用户清除答案时
          if (
            value === "" ||
            value === null ||
            value === undefined ||
            (Array.isArray(value) && value.length === 0) ||
            value === false
          ) {
            // 如果值为空，则移除该答案
            set((state: AnswersState) => ({
              answersByQuestionnaire: {
                ...state.answersByQuestionnaire,
                [currentQuestionnaireId]: currentAnswers.filter(answer => answer.fe_id !== fe_id)
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
              set((state: AnswersState) => ({
                answersByQuestionnaire: {
                  ...state.answersByQuestionnaire,
                  [currentQuestionnaireId]: currentAnswers.map(answer =>
                    answer.fe_id && answer.fe_id === ensuredFeId
                      ? { ...answer, value, isIncomplete: true, questionType, fe_id: ensuredFeId }
                      : answer
                  )
                }
              }));
            } else {
              set((state: AnswersState) => ({
                answersByQuestionnaire: {
                  ...state.answersByQuestionnaire,
                  [currentQuestionnaireId]: [
                    ...currentAnswers,
                    { fe_id: ensuredFeId, value, isIncomplete: true, questionType }
                  ]
                }
              }));
            }
            return;
          }

          if (existingAnswer) {
            // 如果答案已存在，则更新
            set((state: AnswersState) => ({
              answersByQuestionnaire: {
                ...state.answersByQuestionnaire,
                [currentQuestionnaireId]: currentAnswers.map(answer =>
                  answer.fe_id && answer.fe_id === ensuredFeId
                    ? { ...answer, value, isIncomplete: false, fe_id: ensuredFeId }
                    : answer
                )
              }
            }));
          } else {
            // 如果答案不存在，则新增
            set((state: AnswersState) => ({
              answersByQuestionnaire: {
                ...state.answersByQuestionnaire,
                [currentQuestionnaireId]: [
                  ...currentAnswers,
                  { value, isIncomplete: false, questionType, fe_id: ensuredFeId }
                ]
              }
            }));
          }
        },

        // 移除单个答案
        removeAnswer: (fe_id: string) => {
          const { answersByQuestionnaire, currentQuestionnaireId } = get();
          const currentAnswers = answersByQuestionnaire[currentQuestionnaireId] || [];

          set((state: AnswersState) => ({
            answersByQuestionnaire: {
              ...state.answersByQuestionnaire,
              [currentQuestionnaireId]: currentAnswers.filter(answer => answer.fe_id !== fe_id)
            }
          }));
        },

        // 清空当前问卷的所有答案
        clearAnswers: () => {
          const { answersByQuestionnaire, currentQuestionnaireId } = get();

          set((state: AnswersState) => ({
            ...state,
            answersByQuestionnaire: {
              ...answersByQuestionnaire,
              [currentQuestionnaireId]: []
            }
          }));
        },

        // 获取每个题目是否已回答的 boolean 数组
        getAnsweredStatus: (fe_ids: string[]) => {
          const { answersByQuestionnaire, currentQuestionnaireId } = get();
          const currentAnswers = answersByQuestionnaire[currentQuestionnaireId] || [];

          const status = fe_ids.map(fe_id => {
            // 强制转换所有ID为字符串进行比较
            const strFeId = String(fe_id);

            const answer = currentAnswers.find(a => {
              const aFeId = String(a.fe_id);

              return aFeId === strFeId;
            });

            // 答案存在且不是未完成状态才算作已回答
            return answer ? !answer.isIncomplete : false;
          });

          return status;
        },

        // 获取特定问题的答案
        getAnswerByQuestionId: (fe_id: string) => {
          const { answersByQuestionnaire, currentQuestionnaireId } = get();
          const currentAnswers = answersByQuestionnaire[currentQuestionnaireId] || [];

          // 强制转换为字符串统一比较
          const strFeId = String(fe_id);

          const answer = currentAnswers.find(answer => {
            const answerFeId = String(answer.fe_id);
            return answerFeId === strFeId;
          });

          return answer?.value;
        },

        // 检查问卷是否已完成
        isQuestionnaireComplete: (fe_ids: string[]) => {
          const status = get().getAnsweredStatus(fe_ids);
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
