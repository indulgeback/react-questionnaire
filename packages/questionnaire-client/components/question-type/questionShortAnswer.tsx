import { Question } from "@/types/question";
import { Input } from "@heroui/input";
import React, { useState } from "react";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionShortAnswer = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer } = useAnswerStore();
  const [value, setValue] = useState("");

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    addOrUpdateAnswer(question.id, newValue);
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
