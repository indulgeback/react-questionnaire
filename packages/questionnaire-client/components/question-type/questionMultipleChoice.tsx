"use client";

import React, { useState, useEffect } from "react";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
import { Question } from "@/types/question";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionCheckbox = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer, getAnswerByQuestionId } = useAnswerStore();
  const [selected, setSelected] = useState<string[]>([]);

  // 组件挂载时检查是否有已保存的答案
  useEffect(() => {
    const savedAnswer = getAnswerByQuestionId(question.fe_id);
    if (Array.isArray(savedAnswer)) {
      setSelected(savedAnswer);
    }
  }, [question.fe_id, getAnswerByQuestionId]);

  const handleSelectionChange = (values: string[]) => {
    setSelected(values);
    // 确保即使是空数组也会触发状态更新
    addOrUpdateAnswer(question.fe_id, values, question.type);
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
