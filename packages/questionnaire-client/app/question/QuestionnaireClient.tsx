"use client";

import QuestionRenderer from "@/components/question-ui/questionRenderer";
import QuestionWrapper from "@/components/question-ui/questionWrapper";
import React, { useEffect, useState } from "react";
import useQuestionStore from "@/stores/useQuestionStore";
import { Button } from "@heroui/button";
import { SparklesIcon } from "@heroicons/react/24/solid";
import QuestionnaireProgress from "@/components/question-ui/QuestionnaireProgress";
import useAnswerStore from "@/stores/useAnswerStore";
import useScrollHighlight from "@/hooks/useScrollHighlight";
import { useRouter } from "next/navigation";
import useNotyf from "@/hooks/useNotyf";

const QuestionnaireClient: React.FC = () => {
  const { questionnaireData, metadata } = useQuestionStore();
  const {
    getAnsweredStatus,
    getAllAnswers,
    currentQuestionnaireId,
    clearAnswers,
    setCurrentQuestionnaireId
  } = useAnswerStore();
  const scrollAndHighlight = useScrollHighlight();
  const [questionnaireName, setQuestionnaireName] = useState<string>("问卷调查");
  const router = useRouter();
  const { showSuccess, showError } = useNotyf();

  // 初始化问卷标题和ID
  useEffect(() => {
    if (metadata) {
      if (metadata.title) {
        setQuestionnaireName(metadata.title);
      }
      if (metadata.id) {
        setCurrentQuestionnaireId(metadata.id.toString());
      }
    }
  }, [metadata, setCurrentQuestionnaireId]);

  // 在提交前检查答案格式
  const formatAnswers = () => {
    const answers = getAllAnswers();
    return answers.map(answer => ({
      question_id: answer.questionId,
      question_type: answer.questionType,
      answer: answer.value
    }));
  };

  const onSubmit = async () => {
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
      try {
        // 获取并格式化所有答案
        const formattedAnswers = formatAnswers();

        // 提交答案到服务器
        const response = await fetch("/client/api/answer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            questionnaire_id: Number(currentQuestionnaireId),
            answers: formattedAnswers,
            metadata: {
              user_agent: navigator.userAgent,
              submit_time: new Date().toISOString()
            }
          })
        });

        const result = await response.json();

        if (result.success) {
          // 提交成功，弹出提示并跳转到成功页
          showSuccess("问卷提交成功！");
          clearAnswers();
          router.push("/question/success");
        } else {
          throw new Error(result.error || "提交失败");
        }
      } catch (error) {
        console.error("提交问卷失败:", error);
        showError("提交失败，请稍后重试");
      }
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
            {questionnaireName}
          </h1>
          <p className="text-sm text-default-500 dark:text-white">
            问卷ID: {currentQuestionnaireId} | 请认真填写以下问题
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
              className="p-6 bg-background dark:bg-default-50 rounded-lg shadow-lg"
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
