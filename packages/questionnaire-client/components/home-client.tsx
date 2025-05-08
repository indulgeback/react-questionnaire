"use client";

import React from "react";
import { questionInfo } from "@/components/primitives";
import useQuestionStore from "@/stores/useQuestionStore";
import HomeClientSkeleton from "./home-client-skeleton";

export default function HomeClient() {
  const { questionnaireData, metadata } = useQuestionStore();

  // 检查是否有问卷数据
  if (!questionnaireData || questionnaireData.length === 0) {
    return <HomeClientSkeleton />;
  }

  return (
    <>
      <div className={questionInfo()}>问卷主题: {metadata.title}</div>
      <div className={questionInfo()}>问卷发起人: {metadata.creator}</div>
      <div className={questionInfo()}>问卷题目数量: {questionnaireData.length}</div>
    </>
  );
}
