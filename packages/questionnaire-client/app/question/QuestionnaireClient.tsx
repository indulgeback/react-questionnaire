"use client";

import QuestionRenderer from "@/components/question-ui/questionRenderer";
import QuestionWrapper from "@/components/question-ui/questionWrapper";
import React, { useEffect } from "react";
import useQuestionStore from "@/stores/useQuestionStore";
import { Button } from "@heroui/button";
import { SparklesIcon } from "@heroicons/react/24/solid";
import QuestionnaireProgress from "@/components/question-ui/QuestionnaireProgress";
import { Question } from "@/types/question";
import useAnswerStore from "@/stores/useAnswerStore";
import useScrollHighlight from "@/hooks/useScrollHighlight";

interface QuestionnaireMetadata {
  title: string;
  creator: string;
  createTime: string;
  updateTime: string;
}

interface QuestionnaireClientProps {
  initialQuestionnaireData: {
    metadata: QuestionnaireMetadata;
    questions: Question[];
  };
}

const QuestionnaireClient: React.FC<QuestionnaireClientProps> = ({ initialQuestionnaireData }) => {
  const { initialize, questionnaireData } = useQuestionStore();
  const { getAnsweredStatus } = useAnswerStore();
  const scrollAndHighlight = useScrollHighlight();

  // 使用服务端获取的数据初始化问卷状态
  useEffect(() => {
    if (initialQuestionnaireData && initialQuestionnaireData.questions.length > 0) {
      initialize(initialQuestionnaireData.questions);
    }
  }, [initialQuestionnaireData, initialize]);

  const onSubmit = () => {
    // 获取所有问题的回答状态
    const progress = document.querySelector(".questionnaire-progress");
    const questionIds = questionnaireData.map(question => question.id);
    const answeredStatus = getAnsweredStatus(questionIds);

    // 查找第一个未回答的问题索引
    const firstUnansweredIndex = answeredStatus.findIndex(status => !status);

    // 如果有未回答的问题，滚动到该问题
    if (firstUnansweredIndex !== -1) {
      const questionId = questionnaireData[firstUnansweredIndex].id;
      scrollAndHighlight(`question-${questionId}`);
      progress?.classList.add("highlight-animation");
      setTimeout(() => {
        progress?.classList.remove("highlight-animation");
      }, 1500);
    } else {
      // 所有问题都已回答，这里可以添加提交逻辑
      console.log("所有问题已完成，可以提交问卷");
      // 添加实际提交逻辑
    }
  };

  if (questionnaireData.length === 0) {
    return <div className="flex justify-center items-center h-screen">加载问卷中...</div>;
  }

  return (
    <QuestionWrapper>
      <div className="container mx-auto px-4">
        {/* 问卷标题和元信息 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-default-900 dark:text-white mb-2">
            {initialQuestionnaireData.metadata.title}
          </h1>
          <p className="text-sm text-default-500 dark:text-white">
            发起人: {initialQuestionnaireData.metadata.creator} | 最近更新:{" "}
            {new Date(initialQuestionnaireData.metadata.updateTime).toLocaleDateString()}
          </p>
        </div>

        <div className="questionnaire-progress sticky top-12 z-50 rounded-lg shadow-lg">
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

export default QuestionnaireClient;
