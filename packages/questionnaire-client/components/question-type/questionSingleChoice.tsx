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
    const questionIdentifier = question.fe_id;
    const savedAnswer = getAnswerByQuestionId(questionIdentifier);
    if (savedAnswer && typeof savedAnswer === "string") {
      setSelected(savedAnswer);
    }
  }, [question.fe_id, getAnswerByQuestionId]);

  const handleSelectionChange = (value: string) => {
    // 优先使用fe_id
    const questionIdentifier = question.fe_id;

    // 如果选择了相同的值，则清除选择
    if (value === selected) {
      setSelected("");
      removeAnswer(questionIdentifier);
      return;
    }

    setSelected(value);
    // 同时传递id和fe_id，确保后端可以正确匹配
    addOrUpdateAnswer(question.fe_id, value, question.type);
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
