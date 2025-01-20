import QuestionActions from "@/components/question-ui/questionActions";
import QuestionWrapper from "@/components/question-ui/questionWrapper";
import QuestionCheckbox from "@/components/question-type/questionCheckbox";
import QuestionRadio from "@/components/question-type/questionRadio";
import React from "react";

const AnswerPage = () => {
  return (
    <QuestionWrapper>
      <QuestionRadio />
      <QuestionCheckbox />
      <QuestionActions />
    </QuestionWrapper>
  );
};

export default AnswerPage;
