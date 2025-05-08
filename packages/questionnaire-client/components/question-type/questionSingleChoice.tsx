"use client";

import { Radio, RadioGroup } from "@heroui/radio";
import React, { useState, useEffect } from "react";
import { Question } from "@/types/question";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionRadio = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer, getAnswerByQuestionId, removeAnswer } = useAnswerStore();
  const [selected, setSelected] = useState("");

  // 组件挂载时检查是否有已保存的答案
  useEffect(() => {
    const savedAnswer = getAnswerByQuestionId(question.id);
    if (savedAnswer && typeof savedAnswer === "string") {
      setSelected(savedAnswer);
    }
  }, [question.id, getAnswerByQuestionId]);

  const handleSelectionChange = (value: string) => {
    // 如果选择了相同的值，则清除选择
    if (value === selected) {
      setSelected("");
      removeAnswer(question.id);
      return;
    }

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
