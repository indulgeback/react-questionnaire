import React from "react";
import { Question } from "@/types/question";
import QuestionnaireClientComponent from "./QuestionnaireClient";
import { generateQuestionnaireData } from "../api/questionnaire/route";
import { getQuestionnaireById } from "../api/questionnaire/compatible/route";

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
    // 首先尝试从MongoDB获取数据
    const mongoData = await getQuestionnaireById(1);

    if (mongoData) {
      console.log("成功从MongoDB获取问卷数据");

      // 深拷贝并清理MongoDB特殊对象，确保数据是纯JavaScript对象
      const cleanData = {
        metadata: { ...mongoData.metadata },
        questions: mongoData.questions.map((q: any) => {
          // 移除MongoDB特殊字段，如_id，并创建纯对象
          const { _id, ...cleanQuestion } = q;
          return cleanQuestion;
        })
      };

      return cleanData;
    }

    // 如果MongoDB中没有数据，使用模拟数据作为备选
    console.log("MongoDB中无数据，使用模拟数据");
    return generateQuestionnaireData();
  } catch (error) {
    console.error("获取问卷数据出错:", error);
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
