"use client";

import React, { useState } from "react";
import { Input } from "@heroui/input";
import { Question } from "@/types/question";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionInput = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer } = useAnswerStore();
  const [value, setValue] = useState("");

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (newValue.trim()) {
      addOrUpdateAnswer(question.id, newValue);
    }
  };

  return (
    <Input
      variant="underlined"
      color="secondary"
      label={question?.question}
      placeholder={question?.placeholder || ""}
      value={value}
      onChange={handleValueChange}
    />
  );
};

export default QuestionInput;
