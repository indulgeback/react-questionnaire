"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@heroui/input";
import { Question } from "@/types/question";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionInput = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer, getAnswerByQuestionId } = useAnswerStore();
  const [value, setValue] = useState("");

  // 组件挂载时检查是否有已保存的答案
  useEffect(() => {
    const savedAnswer = getAnswerByQuestionId(question.id);
    if (savedAnswer && typeof savedAnswer === "string") {
      setValue(savedAnswer);
    }
  }, [question.id, getAnswerByQuestionId]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    // 无论输入是否为空，都更新答案状态
    // 空值会在 addOrUpdateAnswer 中被处理为移除该答案
    addOrUpdateAnswer(question.id, newValue);
  };

  return (
    <Input
      variant="underlined"
      color="secondary"
      label={question?.question}
      placeholder={question?.placeholder || ""}
      value={value}
      onChange={handleValueChange}
    />
  );
};

export default QuestionInput;
