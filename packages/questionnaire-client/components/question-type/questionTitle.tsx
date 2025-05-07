import { Question } from "@/types/question";
import React from "react";

const QuestionTitle = ({ question }: { question: Question }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl md:text-2xl font-bold">{question.question}</h2>
      {question.placeholder && <p className="mt-2 text-gray-600">{question.placeholder}</p>}
    </div>
  );
};

export default QuestionTitle;
