import React from "react";
import { QueueListIcon } from "@heroicons/react/24/solid";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import QuestionMatrix from "@/components/questionMatrix";
import { Button } from "@heroui/button";

const QuestionsStatus = () => {
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button color="secondary" variant="shadow" isIconOnly radius="full">
          <QueueListIcon className="text-white size-6 cursor-pointer" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <QuestionMatrix />
      </PopoverContent>
    </Popover>
  );
};

export default QuestionsStatus;
