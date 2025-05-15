import { Question } from "@/types/question";
import { Input } from "@heroui/input";
import React, { useState, useEffect } from "react";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionShortAnswer = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer, getAnswerByQuestionId } = useAnswerStore();
  const [value, setValue] = useState("");

  // 回显逻辑
  useEffect(() => {
    const saved = getAnswerByQuestionId(question.id);
    if (typeof saved === "string") {
      setValue(saved);
    }
  }, [question.id, getAnswerByQuestionId]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    addOrUpdateAnswer(question.id, newValue, question.type);
  };

  return (
    <Input
      color="secondary"
      label={question.question}
      placeholder={question.placeholder}
      variant="underlined"
      value={value}
      onChange={handleValueChange}
    />
  );
};

export default QuestionShortAnswer;
