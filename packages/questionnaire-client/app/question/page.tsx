"use client";

import QuestionRenderer from "@/components/question-ui/questionRenderer";
import QuestionActions from "@/components/question-ui/questionActions";
import QuestionWrapper from "@/components/question-ui/questionWrapper";
import React from "react";
import useQuestionStore from "@/stores/useQuestionStore";
const QuestionPage = () => {
  const { questionnaireData, currentIndex } = useQuestionStore();

  return (
    <QuestionWrapper>
      <QuestionActions />
      <QuestionRenderer question={questionnaireData[currentIndex]} />
    </QuestionWrapper>
  );
};

export default QuestionPage;
