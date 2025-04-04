import React from "react";
import { Chip } from "@heroui/chip";
import { QuestionType, Question, questionTypeMap } from "@/types/question";
import QuestionBaseInfo from "@/components/question-type/questionBaseInfo";
import QuestionTrueOfFalse from "@/components/question-type/questionTrueOrFalse";
import QuestionMultipleChoice from "@/components/question-type/questionMultipleChoice";
import QuestionSingleChoice from "@/components/question-type/questionSingleChoice";
import QuestionShortAnswer from "@/components/question-type/questionShortAnswer";

const QuestionRenderSelector = ({ question }: { question: Question }) => {
  switch (question.type) {
    case QuestionType.SINGLE_CHOICE:
      return <QuestionSingleChoice question={question} />;
    case QuestionType.MULTIPLE_CHOICE:
      return <QuestionMultipleChoice question={question} />;
    case QuestionType.BASE_INFO:
      return <QuestionBaseInfo question={question} />;
    case QuestionType.TRUE_FALSE:
      return <QuestionTrueOfFalse question={question} />;
    case QuestionType.SHORT_ANSWER:
      return <QuestionShortAnswer question={question} />;
    default:
      return <div>Question Renderer Error</div>;
  }
};

const QuestionRenderer = ({ question }: { question: Question }) => {
  const { id, type } = question;

  return (
    <>
      <Chip color="secondary" variant="flat">
        {id} [{questionTypeMap[type]}]
      </Chip>
      <QuestionRenderSelector question={question} />
    </>
  );
};

export default QuestionRenderer;
