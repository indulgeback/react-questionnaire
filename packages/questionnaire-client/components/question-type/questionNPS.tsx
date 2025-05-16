import { Question } from "@/types/question";
import React, { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionNPS = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer, getAnswerByQuestionId } = useAnswerStore();
  const [score, setScore] = useState<number | null>(null);

  // 回显逻辑
  useEffect(() => {
    const saved = getAnswerByQuestionId(question.fe_id);
    if (typeof saved === "string" && !isNaN(Number(saved))) {
      setScore(Number(saved));
    }
  }, [question.fe_id, getAnswerByQuestionId]);

  const handleScoreChange = (value: number) => {
    setScore(value);
    addOrUpdateAnswer(question.fe_id, value.toString(), question.type);
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="font-medium text-base">{question.question}</label>
      <div className="flex flex-wrap gap-2 justify-center">
        {Array.from({ length: 11 }, (_, i) => i).map(value => (
          <Button
            key={value}
            size="sm"
            radius="sm"
            variant={score === value ? "solid" : "bordered"}
            color={score === value ? "secondary" : "default"}
            onPress={() => handleScoreChange(value)}
            className="w-10 h-10 min-w-10"
          >
            {value}
          </Button>
        ))}
      </div>
      <div className="flex justify-between text-sm text-default-600 dark:text-default-400 mt-1">
        <span>不太可能</span>
        <span>非常可能</span>
      </div>
    </div>
  );
};

export default QuestionNPS;
