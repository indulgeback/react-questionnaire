import React from "react";
import { Chip } from "@heroui/chip";
import { Question, feAlignedQuestionTypeMap, QuestionType } from "@/types/question";
import QuestionComponent from "@/components/question-type";

const QuestionRenderer = ({ question }: { question: Question }) => {
  const { id, type } = question;

  return (
    <>
      <Chip color="secondary" variant="flat" className="mb-4">
        {id} [{feAlignedQuestionTypeMap[type]}]
      </Chip>
      <QuestionComponent question={question} />
    </>
  );
};

export default QuestionRenderer;
