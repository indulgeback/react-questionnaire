"use client";

import React, { useState } from "react";
import { RadioGroup, Radio } from "@heroui/radio";
import { Question } from "@/types/question";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionTrueOrFalse = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer } = useAnswerStore();
  const [selected, setSelected] = useState("");

  const handleChange = (value: string) => {
    setSelected(value);
    addOrUpdateAnswer(question.id, value, question.type);
  };

  return (
    <RadioGroup
      label={question.question}
      orientation="horizontal"
      value={selected}
      onValueChange={handleChange}
    >
      {["是", "否"].map(answer => (
        <Radio color="secondary" key={answer} value={answer}>
          {answer}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default QuestionTrueOrFalse;
