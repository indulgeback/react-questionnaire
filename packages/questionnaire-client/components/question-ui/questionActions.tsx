import { ArrowRightIcon, ArrowLeftIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { Button } from "@heroui/button";
import React from "react";
import QuestionsStatus from "@/components/questionsStatus";
import useQuestionStore from "@/stores/useQuestionStore";

const QuestionActions = () => {
  const { nextQuestion, prevQuestion, jumpToQuestion, isLastQuestion, isFirstQuestion } =
    useQuestionStore();

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="relative flex justify-end gap-16 mb-4">
      <Button
        color="secondary"
        variant="shadow"
        isDisabled={isFirstQuestion()}
        onPress={prevQuestion}
      >
        <ArrowLeftIcon className="w-3 h-3" />
        上一题
      </Button>
      {isLastQuestion() ? (
        <Button color="secondary" variant="shadow" onPress={onSubmit}>
          <SparklesIcon className="w-3 h-3" />
          提交问卷
        </Button>
      ) : (
        <Button color="secondary" variant="shadow" onPress={nextQuestion}>
          下一题
          <ArrowRightIcon className="w-3 h-3" />
        </Button>
      )}
      <div className="absolute left-0">
        <QuestionsStatus />
      </div>
    </div>
  );
};

export default QuestionActions;
