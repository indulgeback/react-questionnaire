"use client";

import QuestionRenderer from "@/components/question-ui/questionRenderer";
import QuestionWrapper from "@/components/question-ui/questionWrapper";
import React, { useEffect } from "react";
import useQuestionStore from "@/stores/useQuestionStore";
import { Button } from "@heroui/button";
import { SparklesIcon } from "@heroicons/react/24/solid";
import QuestionnaireProgress from "@/components/question-ui/QuestionnaireProgress";

const QuestionPage = () => {
  const { questionnaireData, loadTestData } = useQuestionStore();

  useEffect(() => {
    // 初始化加载测试数据
    loadTestData();
  }, [loadTestData]);

  const onSubmit = () => {
    console.log("提交所有问题");
    // 这里添加提交逻辑
  };

  if (questionnaireData.length === 0) {
    return <div className="flex justify-center items-center h-screen">加载问卷中...</div>;
  }

  return (
    <QuestionWrapper>
      <div className="container mx-auto px-4">
        <div className="sticky top-12 z-50">
          <QuestionnaireProgress />
        </div>
        <div className="flex flex-col gap-10 mb-16">
          {questionnaireData.map((question, index) => (
            <div
              key={index}
              id={`question-${question.id}`}
              className="p-6 bg-background dark:bg-default-50 rounded-lg shadow-sm"
            >
              <QuestionRenderer question={question} />
            </div>
          ))}
          <div className="sticky bottom-4 flex justify-center mt-8">
            <Button
              color="secondary"
              variant="shadow"
              size="lg"
              onPress={onSubmit}
              className="px-8"
            >
              <SparklesIcon className="w-4 h-4 mr-2" />
              提交问卷
            </Button>
          </div>
        </div>
      </div>
    </QuestionWrapper>
  );
};

export default QuestionPage;
