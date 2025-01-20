"use client";

import QuestionRenderer from "@/components/question-ui/questionRenderer";
import QuestionActions from "@/components/question-ui/questionActions";
import QuestionWrapper from "@/components/question-ui/questionWrapper";
import { QuestionContext } from "@/contexts/Question";
import React, { useState } from "react";
import { Question } from "@/types/question";

const AnswerPage = () => {
  const [questionnaireData, setQuestionnaireData] = useState<Question[]>([
    {
      id: 1,
      type: "base_info",
      question: "dwadawdawdawdawdawdawdawdawdawdawawdawdawdawdwawda"
    },
    {
      id: 2,
      type: "single_choice",
      question:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta cumque tenetur obcaecati totam, at eius maxime ducimus unde sequi dignissimos.",
      options: [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta cumque tenetur obcaecati totam, at eius maxime ducimus unde sequi dignissimos.",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta cumque tenetur obcaecati totam, at eius maxime ducimus unde "
      ]
    },
    {
      id: 3,
      type: "multiple_choice",
      question:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta cumque tenetur obcaecati totam, at eius maxime ducimus unde sequi dignissimos.",
      options: [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta cumque tenetur obcaecati totam, at eius maxime ducimus unde sequi dignissi.",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta cumque tenetur obcaecati totam, at eius maxime ducimus unde sequi dignsimos.",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta cumque tenetur obcaecati totam, at eius maxime ducimus unde sequi digni."
      ]
    },
    {
      id: 4,
      type: "true_or_false",
      question:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta cumque tenetur obcaecati totam, at eius maxime ducimus unde sequi dignissimos."
    }
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionnaireData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    console.log("提交");
  };

  // 当前题目的数据
  const currentQuestion = questionnaireData[currentQuestionIndex];

  const questionContext = { question: currentQuestion, index: currentQuestionIndex };

  return (
    <QuestionContext.Provider value={questionContext}>
      <QuestionWrapper>
        <QuestionActions
          onNext={handleNextQuestion}
          onPrev={handlePreviousQuestion}
          onSubmit={handleSubmit}
          isLastQuestion={currentQuestionIndex === questionnaireData.length - 1}
          isFirstQuestion={currentQuestionIndex === 0}
        />

        <QuestionRenderer question={currentQuestion} />
      </QuestionWrapper>
    </QuestionContext.Provider>
  );
};

export default AnswerPage;
