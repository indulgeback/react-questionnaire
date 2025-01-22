"use client";

import QuestionRenderer from "@/components/question-ui/questionRenderer";
import QuestionActions from "@/components/question-ui/questionActions";
import QuestionWrapper from "@/components/question-ui/questionWrapper";
import { QuestionContext } from "@/contexts/Question";
import React, { useEffect, useState } from "react";
import { Question, QuestionContextType } from "@/types/question";
import { useRouter } from "next/navigation";

// 定义组件的 props 类型
interface QuestionPageProps {
  params: Promise<{
    id: string; // 路由参数 id
  }>;
}

const QuestionPage = ({ params }: QuestionPageProps) => {
  const router = useRouter();
  const { id } = React.use(params);

  const [questionnaireData, setQuestionnaireData] = useState<Question[]>(
    Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      type: "single_choice",
      question: `Question ${index + 1}`,
      options: ["Option 1", "Option 2", "Option 3"]
    }))
  );

  // 当前题目索引
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  // 将 问卷序号 转换为索引
  useEffect(() => {
    setCurrentQuestionIndex(+id - 1);
  }, [id]);

  // 当前题目的序号
  const currentQuestionNumber = currentQuestionIndex + 1;

  // 根据当前题目序号进行跳转
  const handleNextQuestion = () => {
    if (currentQuestionNumber < questionnaireData.length) {
      router.push(`/question/${currentQuestionNumber + 1}`);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionNumber > 1) {
      router.push(`/question/${currentQuestionNumber - 1}`);
    }
  };

  const handleSubmit = () => {
    console.log("提交");
  };

  // 当前题目的数据
  const currentQuestion = questionnaireData[currentQuestionIndex];

  // 创建 QuestionContext
  const questionContext: QuestionContextType = {
    questionList: questionnaireData,
    question: currentQuestion,
    index: currentQuestionIndex
  };

  return (
    <QuestionWrapper>
      <QuestionContext.Provider value={questionContext}>
        <QuestionActions
          onNext={handleNextQuestion}
          onPrev={handlePreviousQuestion}
          onSubmit={handleSubmit}
          isLastQuestion={currentQuestionIndex === questionnaireData.length - 1}
          isFirstQuestion={currentQuestionIndex === 0}
        />

        <QuestionRenderer question={currentQuestion} />
      </QuestionContext.Provider>
    </QuestionWrapper>
  );
};

export default QuestionPage;
