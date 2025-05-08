import { Question } from "@/types/question";
import { Input } from "@heroui/input";
import React, { useState } from "react";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionParagraph = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer } = useAnswerStore();
  const [value, setValue] = useState("");

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    addOrUpdateAnswer(question.id, newValue, question.type);
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
