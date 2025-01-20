"use client";

import { QuestionContext } from "@/contexts/Question";
import { QuestionContextType } from "@/types/question";
import { Radio, RadioGroup } from "@heroui/radio";
import React, { useContext } from "react";

const QuestionRadio = () => {
  const { question } = useContext(QuestionContext as React.Context<QuestionContextType>);

  return (
    <RadioGroup label={question.question}>
      {(question.options ?? []).map(answer => (
        <Radio color="secondary" key={answer} value={answer}>
          {answer}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default QuestionRadio;
