"use client";

import React, { useContext } from "react";
import { Radio, RadioGroup } from "@heroui/radio";
import { QuestionContext } from "@/contexts/Question";
import { QuestionContextType } from "@/types/question";

enum QuestionTrueOrFalseAnswer {
  TRUE = "TRUE",
  FALSE = "FALSE"
}

const questionTrueOrFalse = () => {
  const { question } = useContext(QuestionContext as React.Context<QuestionContextType>);

  return (
    <div>
      <RadioGroup label={question.question}>
        <Radio
          color="secondary"
          key={QuestionTrueOrFalseAnswer.TRUE}
          value={QuestionTrueOrFalseAnswer.TRUE}
        >
          是
        </Radio>
        <Radio
          color="secondary"
          key={QuestionTrueOrFalseAnswer.FALSE}
          value={QuestionTrueOrFalseAnswer.FALSE}
        >
          否
        </Radio>
      </RadioGroup>
    </div>
  );
};

export default questionTrueOrFalse;
