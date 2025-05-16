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

const BE_API = process.env.NODE_ENV === "production" ? "" : "http://localhost:8879";

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
    return answers.map(answer => {
      console.log(`格式化答案 - fe_id:${answer.fe_id}, 类型:${answer.questionType}`);
      return {
        question_id: answer.fe_id,
        question_type: answer.questionType,
        answer: answer.value
      };
    });
  };

  const onSubmit = async () => {
    // 在提交前，记录当前所有题目的ID信息和答案状态，用于调试
    console.log("------------- 开始提交问卷 -------------");
    console.log("所有题目:", questionnaireData);
    console.log("当前所有答案:", getAllAnswers());

    // 统一使用fe_id作为问题标识符
    const questionIdentifiers = questionnaireData.map(question => {
      // 确保每个问题都有fe_id，如果没有则使用id并转为字符串
      const id = question.fe_id;
      console.log(`检查题目完成状态 - ID:${id}, 类型:${question.type}`);
      return id;
    });
    const answeredStatus = getAnsweredStatus(questionIdentifiers);

    // 查找第一个未回答的问题索引
    const firstUnansweredIndex = answeredStatus.findIndex(status => !status);

    // 如果有未回答的问题，滚动到该问题
    if (firstUnansweredIndex !== -1) {
      const question = questionnaireData[firstUnansweredIndex];
      scrollAndHighlight(`question-${question.fe_id}`);
      const progress = document.querySelector(".questionnaire-progress");
      progress?.classList.add("highlight-animation");
      setTimeout(() => {
        progress?.classList.remove("highlight-animation");
      }, 1500);
    } else {
      try {
        // 获取并格式化所有答案
        const formattedAnswers = formatAnswers();

        // 提交答案到服务器
        const response = await fetch(`/client/api/answer`, {
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
          // 调用BE接口增加答卷数量，带上密钥
          fetch(`${BE_API}/api/question/increment-answer-count/${currentQuestionnaireId}`, {
            method: "PATCH",
            headers: {
              "x-internal-secret": process.env.NEXT_PUBLIC_INTERNAL_API_SECRET || "dev-secret"
            }
          });
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
              id={`question-${question.fe_id}`}
              className="p-6 bg-background dark:bg-default-50 rounded-lg shadow-lg"
            >
              <QuestionRenderer question={question} index={index} />
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
