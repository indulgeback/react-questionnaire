import { Question } from "@/types/question";
import React, { useState } from "react";
import { Input } from "@heroui/input";

const QuestionDate = ({ question }: { question: Question }) => {
  const [date, setDate] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="date"
        label={question.question}
        placeholder={question.placeholder}
        value={date}
        onChange={e => setDate(e.target.value)}
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
