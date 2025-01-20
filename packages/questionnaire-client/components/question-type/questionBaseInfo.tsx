"use client";

import React, { useContext } from "react";
import { Input } from "@heroui/input";
import { QuestionContext } from "@/contexts/Question";
import { QuestionContextType } from "@/types/question";

const questionInput = () => {
  const { question } = useContext(QuestionContext as React.Context<QuestionContextType>);
  return <Input label={question?.question} placeholder={question?.placeholder || ""} />;
};

export default questionInput;
