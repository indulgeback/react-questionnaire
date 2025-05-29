"use client";

import { Question } from "@/types/question";
import React, { useState, useEffect } from "react";
import { Select, SelectItem } from "@heroui/select";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionDropdown = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer, getAnswerByQuestionId } = useAnswerStore();
  const [selected, setSelected] = useState("");
  const options = question.options || [];

  // 回显逻辑
  useEffect(() => {
    const saved = getAnswerByQuestionId(question.fe_id);
    if (typeof saved === "string") {
      setSelected(saved);
    }
  }, [question.fe_id, getAnswerByQuestionId]);

  return (
    <div className="flex flex-col gap-4">
      <Select
        label={question.question}
        placeholder={question.placeholder || "请选择"}
        selectedKeys={selected ? [selected] : []}
        onSelectionChange={keys => {
          const selectedValue = Array.from(keys)[0]?.toString() || "";
          setSelected(selectedValue);
          if (selectedValue) {
            addOrUpdateAnswer(question.fe_id, selectedValue, question.type);
          }
        }}
        color="secondary"
        variant="bordered"
        radius="sm"
        classNames={{
          label: "font-medium text-base",
          trigger: "border-2"
        }}
      >
        {options.map(option => (
          <SelectItem key={option}>{option}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default QuestionDropdown;
