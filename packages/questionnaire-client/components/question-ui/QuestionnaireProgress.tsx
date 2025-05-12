"use client";

import React, { useEffect, useState, useCallback } from "react";
import useAnswerStore from "@/stores/useAnswerStore";
import useQuestionStore from "@/stores/useQuestionStore";
import clsx from "clsx";
import { Tooltip } from "@heroui/tooltip";
import { Chip } from "@heroui/chip";
import { QuestionType } from "@/types/question";
import useScrollHighlight from "@/hooks/useScrollHighlight";

interface QuestionnaireProgressProps {
  onQuestionClick?: (questionId: number) => void;
}

const QuestionnaireProgress: React.FC<QuestionnaireProgressProps> = ({ onQuestionClick }) => {
  const { questionnaireData } = useQuestionStore();
  const { getAnsweredStatus, answersByQuestionnaire } = useAnswerStore();
  const scrollAndHighlight = useScrollHighlight();
  const [answeredStatus, setAnsweredStatus] = useState<boolean[]>([]);
  const [completionRate, setCompletionRate] = useState<number>(0);
  const [answeredCount, setAnsweredCount] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);

  // 使用useCallback包装updateProgress函数，避免不必要的重新创建
  const updateProgress = useCallback(() => {
    if (!questionnaireData || questionnaireData.length === 0) return;

    const questionIds = questionnaireData.map(question => question.id);
    const status = getAnsweredStatus(questionIds);

    // 特殊处理：将标题类型题目标记为已回答
    const modifiedStatus = status.map((isAnswered, index) => {
      const questionType = questionnaireData[index]?.type;
      // 标题题标记为已完成
      if (questionType === QuestionType.QuestionTitle) {
        return true;
      }
      return isAnswered;
    });

    setAnsweredStatus(modifiedStatus);

    // 计算完成率
    const totalQuestionsCount = questionnaireData.length;
    const currentAnsweredCount = modifiedStatus.filter(Boolean).length;

    setTotalQuestions(totalQuestionsCount);
    setAnsweredCount(currentAnsweredCount);
    setCompletionRate(
      totalQuestionsCount > 0 ? Math.round((currentAnsweredCount / totalQuestionsCount) * 100) : 0
    );
  }, [questionnaireData, getAnsweredStatus, answersByQuestionnaire]);

  // 每当答案、问题数据或updateProgress函数变化时重新计算进度
  useEffect(() => {
    updateProgress();
  }, [questionnaireData, updateProgress, answersByQuestionnaire]);

  // 页面加载时立即执行一次更新
  useEffect(() => {
    const initializeStatus = () => {
      updateProgress();
    };
    initializeStatus();
  }, [updateProgress]);

  const scrollToQuestion = (questionId: number) => {
    if (onQuestionClick) {
      onQuestionClick(questionId);
    } else {
      scrollAndHighlight(`question-${questionId}`);
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
                    : question.type === QuestionType.QuestionTitle
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
