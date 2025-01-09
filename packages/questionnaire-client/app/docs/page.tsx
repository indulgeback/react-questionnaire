import QuestionActions from "@/components/question-ui/questionActions";
import QuestionWrapper from "@/components/question-ui/questionWrapper";
import QuestionCheckbox from "@/components/questions/questionCheckbox";
import QuestionRadio from "@/components/questions/questionRadio";
import React from "react";

export default function DocsPage() {
  return (
    <QuestionWrapper>
      <QuestionRadio />
      <QuestionCheckbox />
      <QuestionActions />
    </QuestionWrapper>
  );
}
