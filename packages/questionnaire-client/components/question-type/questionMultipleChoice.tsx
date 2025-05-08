"use client";

import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Question } from "@/types/question";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionCheckbox = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer } = useAnswerStore();
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelectionChange = (values: string[]) => {
    setSelected(values);
    addOrUpdateAnswer(question.id, values);
  };

  return (
    <CheckboxGroup label={question.question} value={selected} onValueChange={handleSelectionChange}>
      {(question.options ?? []).map(answer => (
        <Checkbox color="secondary" key={answer} value={answer}>
          {answer}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
};

export default QuestionCheckbox;
