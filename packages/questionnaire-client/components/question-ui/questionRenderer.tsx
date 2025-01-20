import React from "react";
import { Chip } from "@heroui/chip";
import { QuestionType, Question } from "@/types/question";
import QuestionBaseInfo from "@/components/question-type/questionBaseInfo";
import QuestionTrueOfFalse from "@/components/question-type/questionTrueOrFalse";
import QuestionMultipleChoice from "@/components/question-type/questionMultipleChoice";
import QuestionSingleChoice from "@/components/question-type/questionSingleChoice";

const QuestionRenderSelector = ({ type }: { type: QuestionType }) => {
  switch (type) {
    case QuestionType.SINGLE_CHOICE:
      return <QuestionSingleChoice />;
    case QuestionType.MULTIPLE_CHOICE:
      return <QuestionMultipleChoice />;
    case QuestionType.BASE_INFO:
      return <QuestionBaseInfo />;
    case QuestionType.TRUE_OR_FALSE:
      return <QuestionTrueOfFalse />;
    default:
      return <div>Question Renderer Error</div>;
  }
};

const QuestionRenderer = ({ question }: { question: Question }) => {
  const { id, type } = question;

  return (
    <div className="flex relative pl-8">
      <Chip className="absolute left-[-12px] top-[-2px]" color="secondary" variant="flat">
        {id}
      </Chip>
      <QuestionRenderSelector type={type as QuestionType} />
    </div>
  );
};

export default QuestionRenderer;
