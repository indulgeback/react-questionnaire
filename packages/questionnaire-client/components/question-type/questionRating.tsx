import { Question } from "@/types/question";
import React, { useState } from "react";
import { Button } from "@heroui/button";

const QuestionRating = ({ question }: { question: Question }) => {
  const [rating, setRating] = useState(0);
  const maxRating = question.max || 5;

  return (
    <div className="flex flex-col gap-4">
      <label className="font-medium text-base">{question.question}</label>
      <div className="flex gap-2">
        {Array.from({ length: maxRating }, (_, i) => i + 1).map(value => (
          <Button
            key={value}
            size="sm"
            radius="full"
            variant={value <= rating ? "solid" : "bordered"}
            color={value <= rating ? "secondary" : "default"}
            onAbort={() => setRating(value)}
            className="w-10 h-10 min-w-10"
          >
            {value}
          </Button>
        ))}
      </div>
      {rating > 0 && (
        <div className="text-sm text-gray-600 mt-1">
          当前评分: {rating}/{maxRating}
        </div>
      )}
    </div>
  );
};

export default QuestionRating;
