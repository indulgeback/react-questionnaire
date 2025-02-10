"use client";

import React from "react";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Question } from "@/types/question";

const QuestionCheckbox = ({ question }: { question: Question }) => {
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
