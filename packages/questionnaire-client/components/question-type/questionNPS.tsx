import { Question } from "@/types/question";
import React, { useState } from "react";
import { Button } from "@heroui/button";

const QuestionNPS = ({ question }: { question: Question }) => {
  const [score, setScore] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <label className="font-medium text-base">{question.question}</label>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 11 }, (_, i) => i).map(value => (
          <Button
            key={value}
            size="sm"
            radius="sm"
            variant={score === value ? "solid" : "bordered"}
            color={score === value ? "secondary" : "default"}
            onClick={() => setScore(value)}
            className="w-10 h-10 min-w-10"
          >
            {value}
          </Button>
        ))}
      </div>
      {score !== null && (
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>不太可能</span>
          <span>非常可能</span>
        </div>
      )}
    </div>
  );
};

export default QuestionNPS;
