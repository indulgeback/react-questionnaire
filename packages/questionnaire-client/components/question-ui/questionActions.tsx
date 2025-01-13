import { Button } from "@nextui-org/button";
import React from "react";
const QuestionActions = () => {
  return (
    <div className="flex justify-center md:justify-end gap-16 mt-10">
      <Button color="secondary" variant="shadow">
        Prev
      </Button>
      <Button color="secondary" variant="shadow">
        Next
      </Button>
    </div>
  );
};

export default QuestionActions;
