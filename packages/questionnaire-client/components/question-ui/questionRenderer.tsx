import React from "react";
import { Chip } from "@heroui/chip";
import { Question, feAlignedQuestionTypeMap } from "@/types/question";
import QuestionComponent from "@/components/question-type";

const QuestionRenderer = ({ question, index }: { question: Question; index: number }) => {
  const { type, fe_id } = question;

  return (
    <>
      <Chip color="secondary" variant="flat" className="mb-4">
        {index + 1} [{feAlignedQuestionTypeMap[type]}]
      </Chip>
      <QuestionComponent question={question} />
    </>
  );
};

export default QuestionRenderer;
