"use client";

import React from "react";
import { Radio, RadioGroup } from "@heroui/radio";
import { Question } from "@/types/question";
enum QuestionTrueOrFalseAnswer {
  TRUE = "TRUE",
  FALSE = "FALSE"
}

const QuestionTrueOrFalse = ({ question }: { question: Question }) => {
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

export default QuestionTrueOrFalse;
