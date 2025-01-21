"use client";

import useAnswerStore from "@/store/useAnswerStore";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React from "react";

const QuestionMatrix = () => {
  const questionnaire = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    type: "single_choice",
    question: `Question ${index + 1}`,
    options: ["Option 1", "Option 2", "Option 3"]
  }));

  const { theme } = useTheme();
  const router = useRouter();
  const { getAnsweredStatus } = useAnswerStore();
  const answeredStatus = getAnsweredStatus(questionnaire.map(question => question.id));
  const toAnswer = (questionId: number) => {
    router.push(`/question/${questionId}`);
  };

  return (
    <div className="p-2 size-56 flex flex-wrap gap-2 overflow-scroll">
      {questionnaire.map((question, index) => (
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
