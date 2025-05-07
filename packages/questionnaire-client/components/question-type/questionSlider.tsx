import { Question } from "@/types/question";
import React, { useState } from "react";

const QuestionSlider = ({ question }: { question: Question }) => {
  const min = question.min || 0;
  const max = question.max || 100;
  const step = question.step || 1;
  const [value, setValue] = useState(min);

  // 计算滑块填充百分比
  const fillPercentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-4">
      <label className="font-medium text-base">{question.question}</label>
      <div className="flex items-center gap-4">
        <div className="relative w-full h-2 bg-gray-200 rounded-lg">
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
            onChange={e => setValue(Number(e.target.value))}
            className="absolute w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        <span className="text-sm font-medium px-3 py-1 min-w-10 text-center bg-secondary-100 text-secondary-800 rounded-full">
          {value}
        </span>
      </div>
      <div className="flex justify-between text-xs text-gray-500 px-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default QuestionSlider;
