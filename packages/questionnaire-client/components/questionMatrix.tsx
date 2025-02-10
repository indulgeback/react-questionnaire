"use client";

import useAnswerStore from "@/stores/useAnswerStore";
import useQuestionStore from "@/stores/useQuestionStore";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React from "react";

const QuestionMatrix = () => {
  const { questionnaireData } = useQuestionStore();

  const { theme } = useTheme();
  const router = useRouter();
  const { getAnsweredStatus } = useAnswerStore();
  const answeredStatus = getAnsweredStatus(questionnaireData.map(question => question.id));
  const toAnswer = (questionId: number) => {
    router.push(`/question/${questionId}`);
  };

  return (
    <div className="p-2 size-56 flex flex-wrap gap-2 overflow-scroll">
      {questionnaireData.map((question, index) => (
        <div
          key={index}
          className={clsx(
            "size-5 rounded-sm flex items-center justify-center text-xs cursor-pointer",
            answeredStatus[index] ? (theme === "dark" ? "bg-purple-500" : "bg-purple-200") : ""
          )}
          onClick={() => toAnswer(question.id)}
        >
          {question.id}
        </div>
      ))}
    </div>
  );
};

export default QuestionMatrix;
