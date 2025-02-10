import { Question } from "@/types/question";
import { Input } from "@heroui/input";
import React from "react";

const QuestionShortAnswer = ({ question }: { question: Question }) => {
  return <Input label={question.question} placeholder={question.placeholder} />;
};

export default QuestionShortAnswer;
