import React from "react";
import { Question } from "@/types/question";
import QuestionnaireClientComponent from "./QuestionnaireClient";
import { generateQuestionnaireData } from "../api/questionnaire/route";

// 定义问卷元数据接口
interface QuestionnaireMetadata {
  title: string;
  creator: string;
  createTime: string;
  updateTime: string;
}

// 定义完整问卷数据接口
interface QuestionnaireData {
  metadata: QuestionnaireMetadata;
  questions: Question[];
}

// 服务端组件，用于获取问卷数据
async function getQuestionnaireData(): Promise<QuestionnaireData> {
  try {
    // 添加1秒延迟模拟数据获取过程
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 直接使用API函数，避免服务端fetch问题
    return generateQuestionnaireData();
  } catch (error) {
    console.error("Error fetching questionnaire data:", error);
    // 返回空数据
    return {
      metadata: {
        title: "加载失败",
        creator: "系统",
        createTime: new Date().toISOString(),
        updateTime: new Date().toISOString()
      },
      questions: []
    };
  }
}

export default async function QuestionPage() {
  // 服务端获取问卷数据
  const questionnaireData = await getQuestionnaireData();

  return (
    <div>
      <QuestionnaireClientComponent initialQuestionnaireData={questionnaireData} />
    </div>
  );
}
