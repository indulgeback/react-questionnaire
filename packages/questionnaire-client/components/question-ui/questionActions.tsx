import { Button } from "@nextui-org/button";
import React from "react";
const QuestionActions = () => {
  return (
    <div className="flex justify-center gap-16">
      <Button color="primary" variant="shadow">
        Prev
      </Button>
      <Button color="primary" variant="shadow">
        Next
      </Button>
    </div>
  );
};

export default QuestionActions;
