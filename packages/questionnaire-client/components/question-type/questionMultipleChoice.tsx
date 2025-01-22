"use client";

import React, { useContext } from "react";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { QuestionContext } from "@/contexts/Question";
import { QuestionContextType } from "@/types/question";
const QuestionCheckbox = () => {
  const { question } = useContext(QuestionContext as React.Context<QuestionContextType>);

  return (
    <CheckboxGroup label={question.question}>
      {(question.options ?? []).map(answer => (
        <Checkbox color="secondary" key={answer} value={answer}>
          {answer}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
};

export default QuestionCheckbox;
