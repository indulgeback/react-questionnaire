import React from "react";
const QuestionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full flex flex-col justify-between gap-4">{children}</div>;
};

export default QuestionWrapper;
