import { Question } from "@/types/question";
import React, { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionRating = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer, getAnswerByQuestionId } = useAnswerStore();
  const [rating, setRating] = useState(0);
  const maxRating = question.max || 5;

  // 回显逻辑
  useEffect(() => {
    const saved = getAnswerByQuestionId(question.id);
    if (typeof saved === "string" && !isNaN(Number(saved))) {
      setRating(Number(saved));
    }
  }, [question.id, getAnswerByQuestionId]);

  const handleRatingChange = (value: number) => {
    setRating(value);
    addOrUpdateAnswer(question.id, value.toString(), question.type);
  };

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
            onPress={() => handleRatingChange(value)}
            className="w-10 h-10 min-w-10"
          >
            {value}
          </Button>
        ))}
      </div>
      {rating > 0 && (
        <div className="text-sm text-default-600 dark:text-default-400 mt-1">
          当前评分: {rating}/{maxRating}
        </div>
      )}
    </div>
  );
};

export default QuestionRating;
