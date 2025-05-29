"use client";

import { Question } from "@/types/question";
import { Input } from "@heroui/input";
import React, { useState, useEffect } from "react";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionParagraph = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer, getAnswerByQuestionId } = useAnswerStore();
  const [value, setValue] = useState("");

  // 回显逻辑
  useEffect(() => {
    const saved = getAnswerByQuestionId(question.fe_id);
    if (typeof saved === "string") {
      setValue(saved);
    }
  }, [question.fe_id, getAnswerByQuestionId]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    addOrUpdateAnswer(question.fe_id, newValue, question.type);
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="textarea"
        label={question.question}
        placeholder={question.placeholder}
        description="请在此详细描述您的想法"
        variant="underlined"
        color="secondary"
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
};

export default QuestionParagraph;
