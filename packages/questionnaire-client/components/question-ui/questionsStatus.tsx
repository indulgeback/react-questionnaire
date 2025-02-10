import React, { useState } from "react";
import { QueueListIcon } from "@heroicons/react/24/solid";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import QuestionMatrix from "@/components/question-ui/questionMatrix";
import { Button } from "@heroui/button";

const QuestionsStatus = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover placement="bottom-start" isOpen={isOpen} onOpenChange={open => setIsOpen(open)}>
      <PopoverTrigger>
        <Button color="secondary" variant="shadow" isIconOnly radius="full">
          <QueueListIcon className="text-white size-6 cursor-pointer" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <QuestionMatrix onClose={() => setIsOpen(false)} />
      </PopoverContent>
    </Popover>
  );
};

export default QuestionsStatus;
