import { Question } from "@/types/question";
import React, { useState, useEffect } from "react";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionSlider = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer, getAnswerByQuestionId } = useAnswerStore();
  const min = question.min || 0;
  const max = question.max || 100;
  const step = question.step || 1;
  const [value, setValue] = useState(min);

  // 回显逻辑
  useEffect(() => {
    const saved = getAnswerByQuestionId(question.id);
    if (typeof saved === "string" && !isNaN(Number(saved))) {
      setValue(Number(saved));
    }
  }, [question.id, getAnswerByQuestionId, min]);

  // 计算滑块填充百分比
  const fillPercentage = ((value - min) / (max - min)) * 100;

  // 当滑块值变化时，保存答案
  useEffect(() => {
    if (value !== min) {
      addOrUpdateAnswer(question.id, value.toString(), question.type);
    }
  }, [value, question.id, min, addOrUpdateAnswer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    addOrUpdateAnswer(question.id, newValue.toString(), question.type);
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="font-medium text-base">{question.question}</label>
      <div className="flex items-center gap-4">
        <div className="relative w-full h-2 bg-default-200 dark:bg-default-100 rounded-lg">
          <div
            className="absolute h-full bg-secondary rounded-lg"
            style={{ width: `${fillPercentage}%` }}
          ></div>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            className="absolute w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        <span className="text-sm font-medium px-3 py-1 min-w-10 text-center bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-100 rounded-full">
          {value}
        </span>
      </div>
      <div className="flex justify-between text-xs text-default-500 dark:text-default-400 px-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default QuestionSlider;
