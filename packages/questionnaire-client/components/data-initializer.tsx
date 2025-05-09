"use client";

import { useEffect } from "react";
import useQuestionStore from "@/stores/useQuestionStore";
import useAnswerStore from "@/stores/useAnswerStore";

export default function DataInitializer() {
  const { initializeQuestionnaireData, initializeMetadata } = useQuestionStore();
  const { setCurrentQuestionnaireId } = useAnswerStore();

  // 在组件加载时获取问卷数据
  useEffect(() => {
    const loadQuestionnaireData = async () => {
      try {
        console.log("根组件开始获取问卷数据...");

        const id = new URLSearchParams(window.location.search).get("id") || "1";

        // 设置当前问卷ID
        setCurrentQuestionnaireId(id);

        // 通过 API 路由获取问卷数据，添加/client前缀
        const response = await fetch(`/client/api/questionnaire?id=${id}`);

        if (!response.ok) {
          throw new Error(`获取问卷失败: ${response.status}`);
        }

        const data = await response.json();
        console.log("问卷数据", data);

        if (data && data.questions) {
          console.log("初始化问卷数据成功，题目数量:", data.questions.length);
          console.log("当前问卷ID:", id);
          // 将数据存储到Zustand
          initializeQuestionnaireData(data.questions);
          initializeMetadata(data.metadata);
        } else {
          console.warn("问卷数据为空，请检查数据库");
        }
      } catch (error) {
        console.error("初始化问卷数据出错:", error);
      }
    };

    loadQuestionnaireData();
  }, [initializeQuestionnaireData, initializeMetadata, setCurrentQuestionnaireId]);

  // 此组件不需要渲染任何内容
  return null;
}
