import { Question } from "@/types/question";
import React, { useState } from "react";
import { Input } from "@heroui/input";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionDate = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer } = useAnswerStore();
  const [date, setDate] = useState("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (newDate) {
      addOrUpdateAnswer(question.id, newDate);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="date"
        label={question.question}
        placeholder={question.placeholder}
        value={date}
        onChange={handleDateChange}
        labelPlacement="outside"
        radius="sm"
        variant="bordered"
        color="secondary"
        classNames={{
          label: "font-medium text-base",
          base: "max-w-full",
          inputWrapper: "border-2"
        }}
      />
    </div>
  );
};

export default QuestionDate;
