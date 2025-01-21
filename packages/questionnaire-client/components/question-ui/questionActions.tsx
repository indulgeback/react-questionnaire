import { ArrowRightIcon, ArrowLeftIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { Button } from "@heroui/button";
import React from "react";

type QuestionActionsProps = {
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
  isLastQuestion: boolean;
  isFirstQuestion: boolean;
};

const QuestionActions = ({
  onNext,
  onPrev,
  onSubmit,
  isLastQuestion,
  isFirstQuestion
}: QuestionActionsProps) => {
  return (
    <div className="flex justify-center md:justify-end gap-16 mb-4">
      <Button color="secondary" variant="shadow" isDisabled={isFirstQuestion} onPress={onPrev}>
        <ArrowLeftIcon className="w-3 h-3" />
        上一题
      </Button>
      {isLastQuestion ? (
        <Button color="secondary" variant="shadow" onPress={onSubmit}>
          <SparklesIcon className="w-3 h-3" />
          提交问卷
        </Button>
      ) : (
        <Button color="secondary" variant="shadow" onPress={onNext}>
          下一题
          <ArrowRightIcon className="w-3 h-3" />
        </Button>
      )}
    </div>
  );
};

export default QuestionActions;
