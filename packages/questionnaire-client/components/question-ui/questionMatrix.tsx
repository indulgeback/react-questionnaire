"use client";

import useAnswerStore from "@/stores/useAnswerStore";
import useQuestionStore from "@/stores/useQuestionStore";
import clsx from "clsx";
import React from "react";

const QuestionMatrix = ({ onClose }: { onClose: () => void }) => {
  const { questionnaireData } = useQuestionStore();

  const { getAnsweredStatus } = useAnswerStore();
  const { jumpToQuestion } = useQuestionStore();
  const answeredStatus = getAnsweredStatus(questionnaireData.map(question => question.id));

  const jump = (questionId: number) => {
    jumpToQuestion(questionId - 1);
    onClose();
  };

  return (
    <div className="p-2 size-56 flex flex-wrap gap-2 overflow-scroll">
      {questionnaireData.map((question, index) => (
        <div
          key={index}
          className={clsx(
            "size-5 rounded-sm flex items-center justify-center text-xs cursor-pointer",
            answeredStatus[index]
              ? "bg-secondary text-secondary-foreground"
              : "bg-default-100 dark:bg-default-50 text-default-600 dark:text-default-500"
          )}
          onClick={() => jump(question.id)}
        >
          {question.id}
        </div>
      ))}
    </div>
  );
};

export default QuestionMatrix;
