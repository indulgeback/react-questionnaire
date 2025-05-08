"use client";

import { Radio, RadioGroup } from "@heroui/radio";
import React, { useState } from "react";
import { Question } from "@/types/question";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionRadio = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer } = useAnswerStore();
  const [selected, setSelected] = useState("");

  const handleSelectionChange = (value: string) => {
    setSelected(value);
    addOrUpdateAnswer(question.id, value);
  };

  return (
    <RadioGroup label={question.question} value={selected} onValueChange={handleSelectionChange}>
      {(question.options ?? []).map(answer => (
        <Radio color="secondary" key={answer} value={answer}>
          {answer}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default QuestionRadio;
