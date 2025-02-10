"use client";

import { Radio, RadioGroup } from "@heroui/radio";
import React from "react";
import { Question } from "@/types/question";
const QuestionRadio = ({ question }: { question: Question }) => {
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
