"use client";

import React from "react";
import { Input } from "@heroui/input";
import { Question } from "@/types/question";

const QuestionInput = ({ question }: { question: Question }) => {
  return (
    <Input
      variant="underlined"
      label={question?.question}
      placeholder={question?.placeholder || ""}
    />
  );
};

export default QuestionInput;
