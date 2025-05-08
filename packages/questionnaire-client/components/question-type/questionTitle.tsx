import { Question } from "@/types/question";
import React, { useEffect } from "react";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionTitle = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer } = useAnswerStore();

  // 标题题自动标记为已完成
  useEffect(() => {
    // 使用固定值"title"作为标题的答案，以便识别这是一个已完成的标题题
    addOrUpdateAnswer(question.id, "title", question.type);
  }, [question.id, addOrUpdateAnswer]);

  return (
    <div className="mb-6">
      <h2 className="text-xl md:text-2xl font-bold">{question.question}</h2>
      {question.placeholder && (
        <p className="mt-2 text-gray-600 dark:text-gray-300">{question.placeholder}</p>
      )}
    </div>
  );
};

export default QuestionTitle;
