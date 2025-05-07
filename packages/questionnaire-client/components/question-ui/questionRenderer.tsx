import React from "react";
import { Chip } from "@heroui/chip";
import { QuestionType, Question, questionTypeMap } from "@/types/question";
import QuestionComponent from "@/components/question-type";

const QuestionRenderer = ({ question }: { question: Question }) => {
  const { id, type } = question;

  return (
    <>
      <Chip color="secondary" variant="flat">
        {id} [{questionTypeMap[type]}]
      </Chip>
      <QuestionComponent question={question} />
    </>
  );
};

export default QuestionRenderer;
