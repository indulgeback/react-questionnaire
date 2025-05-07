import { Question } from "@/types/question";
import { Input } from "@heroui/input";
import React from "react";

const QuestionParagraph = ({ question }: { question: Question }) => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        type="textarea"
        label={question.question}
        placeholder={question.placeholder}
        description="请在此详细描述您的想法"
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

export default QuestionParagraph;
