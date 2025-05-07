"use client";

import QuestionRenderer from "@/components/question-ui/questionRenderer";
import QuestionActions from "@/components/question-ui/questionActions";
import QuestionWrapper from "@/components/question-ui/questionWrapper";
import React, { useEffect } from "react";
import useQuestionStore from "@/stores/useQuestionStore";

const QuestionPage = () => {
  const { questionnaireData, currentIndex, loadTestData } = useQuestionStore();

  useEffect(() => {
    // 初始化加载测试数据
    loadTestData();
  }, [loadTestData]);

  if (questionnaireData.length === 0 || !questionnaireData[currentIndex]) {
    return <div className="flex justify-center items-center h-screen">加载问卷中...</div>;
  }

  return (
    <QuestionWrapper>
      <QuestionActions />
      <QuestionRenderer question={questionnaireData[currentIndex]} />
    </QuestionWrapper>
  );
};

export default QuestionPage;
