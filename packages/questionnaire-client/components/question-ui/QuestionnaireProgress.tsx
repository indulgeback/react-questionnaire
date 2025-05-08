"use client";

import React, { useEffect, useState } from "react";
import useAnswerStore from "@/stores/useAnswerStore";
import useQuestionStore from "@/stores/useQuestionStore";
import clsx from "clsx";
import { Tooltip } from "@heroui/tooltip";
import { Chip } from "@heroui/chip";
import { QuestionType } from "@/types/question";

interface QuestionnaireProgressProps {
  onQuestionClick?: (questionId: number) => void;
}

const QuestionnaireProgress: React.FC<QuestionnaireProgressProps> = ({ onQuestionClick }) => {
  const { questionnaireData } = useQuestionStore();
  const { getAnsweredStatus, answers } = useAnswerStore();
  const [answeredStatus, setAnsweredStatus] = useState<boolean[]>([]);
  const [completionRate, setCompletionRate] = useState<number>(0);
  const [answeredCount, setAnsweredCount] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);

  // 立即执行一次初始化进度计算
  useEffect(() => {
    updateProgress();
  }, []);

  // 每当答案变化时重新计算进度
  useEffect(() => {
    updateProgress();
  }, [answers, questionnaireData]);

  const updateProgress = () => {
    if (questionnaireData.length > 0) {
      const questionIds = questionnaireData.map(question => question.id);
      const status = getAnsweredStatus(questionIds);
      setAnsweredStatus(status);

      // 计算完成率（包括所有题目，标题题已在组件中标记为已完成）
      const totalQuestionsCount = questionnaireData.length;
      const answeredCount = status.filter(Boolean).length;

      setTotalQuestions(totalQuestionsCount);
      setAnsweredCount(answeredCount);
      setCompletionRate(
        totalQuestionsCount > 0 ? Math.round((answeredCount / totalQuestionsCount) * 100) : 0
      );

      console.log("进度更新:", {
        totalQuestions: totalQuestionsCount,
        answered: answeredCount,
        rate: totalQuestionsCount > 0 ? Math.round((answeredCount / totalQuestionsCount) * 100) : 0,
        answers: answers.length,
        answersData: answers,
        status
      });
    }
  };

  const scrollToQuestion = (questionId: number) => {
    if (onQuestionClick) {
      onQuestionClick(questionId);
    } else {
      const element = document.getElementById(`question-${questionId}`);
      if (element) {
        // 将元素滚动到屏幕中心
        element.scrollIntoView({ behavior: "smooth", block: "center" });

        // 添加高亮效果
        element.classList.add("highlight-question");
        setTimeout(() => {
          element.classList.remove("highlight-question");
        }, 1500);
      }
    }
  };

  return (
    <div className="mb-8 bg-background dark:bg-default-50 p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">问卷进度</h3>
        <Chip color={completionRate === 100 ? "success" : "secondary"} variant="flat">
          {completionRate}% 完成 ({answeredCount}/{totalQuestions})
        </Chip>
      </div>

      <div className="p-4 bg-background dark:bg-default-50 rounded-lg shadow-sm">
        <div className="flex flex-wrap gap-2">
          {questionnaireData.map((question, index) => (
            <Tooltip
              key={index}
              content={`${question.id}. ${question.question.substring(0, 20)}${question.question.length > 20 ? "..." : ""} - ${answeredStatus[index] ? "已填写" : "未填写"}`}
              delay={500}
            >
              <div
                className={clsx(
                  "size-8 rounded-md flex items-center justify-center text-xs cursor-pointer transition-all",
                  answeredStatus[index]
                    ? "bg-secondary text-secondary-foreground"
                    : question.type === QuestionType.TITLE
                      ? "bg-default-200 dark:bg-default-100 text-default-500 dark:text-default-400"
                      : "bg-default-100 dark:bg-default-50 text-default-600 dark:text-default-500 hover:bg-default-200 dark:hover:bg-default-100"
                )}
                onClick={() => scrollToQuestion(question.id)}
              >
                {question.id}
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireProgress;
