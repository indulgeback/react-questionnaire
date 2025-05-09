"use client";

import React from "react";
import useQuestionStore from "@/stores/useQuestionStore";
import HomeClientSkeleton from "./home-client-skeleton";
import {
  DocumentTextIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function HomeClient() {
  const { questionnaireData, metadata } = useQuestionStore();

  // 检查是否有问卷数据
  if (!questionnaireData || questionnaireData.length === 0) {
    return <HomeClientSkeleton />;
  }

  // 格式化日期展示
  const formatDate = (dateString?: string) => {
    if (!dateString) return "未知时间";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    } catch (e) {
      return "未知时间";
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 relative">
      {" "}
      {/* 增大容器宽度和内边距 */}
      {/* 增强动态背景 */}
      <div className="fixed inset-0 overflow-hidden bg-gradient-to-b from-white/95 via-sky-50/95 to-white/95 dark:from-default-100/95 dark:via-indigo-950/95 dark:to-default-950/95">
        {/* 主要光斑背景 */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-primary-500/30 to-violet-500/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -top-20 right-1/3 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* 光点和线条 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(176,130,255,0.15)_1px,transparent_1px)] [background-size:24px_24px]"></div>

        {/* 光束效果 */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent dark:via-primary-300/20 animate-light-beam"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent dark:via-violet-300/20 animate-light-beam animation-delay-2000"></div>

        {/* 小光点飘浮 */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-primary-400/60 dark:bg-primary-300/60 animate-pulse-float"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-violet-400/60 dark:bg-violet-300/60 animate-pulse-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-2/3 w-1.5 h-1.5 rounded-full bg-cyan-400/60 dark:bg-cyan-300/60 animate-pulse-float animation-delay-2000"></div>
      </div>
      {/* 标题区域 */}
      <div className="mb-10 relative">
        {" "}
        {/* 增大下边距 */}
        <div className="relative backdrop-blur-lg bg-white/70 dark:bg-default-950/70 border border-white/70 dark:border-indigo-500/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
          {/* 标题内部光效 */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-white/5 to-violet-500/10 dark:from-primary-500/20 dark:via-indigo-500/5 dark:to-violet-500/20 opacity-80"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/30 to-violet-500/30 dark:from-primary-400/20 dark:to-violet-400/20 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>

          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-950 dark:text-white flex items-center gap-2">
              <SparklesIcon className="h-6 w-6 text-primary-500 dark:text-primary-400 animate-sparkle" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-violet-700 dark:from-primary-400 dark:to-violet-400">
                {metadata.title || "问卷调查"}
              </span>
            </h1>
            <p className="mt-2 text-default-600 dark:text-default-400 text-sm">
              由 {metadata.creator || "系统"} 创建的智能问卷
            </p>
          </div>
        </div>
      </div>
      {/* 信息卡片区域 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* 问卷主题卡片 */}
        <div className="relative group">
          {/* 卡片背后的光晕 */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 to-primary-400/20 dark:from-primary-500/20 dark:to-primary-400/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative backdrop-blur-md bg-white/60 dark:bg-default-950/60 border border-white/50 dark:border-indigo-500/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="p-5 flex gap-4">
              <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/50 text-primary-500 dark:text-primary-300 shadow-inner">
                <DocumentTextIcon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-default-500 dark:text-default-400 text-sm font-medium mb-1">
                  问卷主题
                </h2>
                <p className="text-lg font-semibold text-default-900 dark:text-white">
                  {metadata.title || "未命名问卷"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 问卷发起人卡片 */}
        <div className="relative group">
          {/* 卡片背后的光晕 */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-blue-400/20 dark:from-blue-500/20 dark:to-blue-400/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative backdrop-blur-md bg-white/60 dark:bg-default-950/60 border border-white/50 dark:border-indigo-500/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="p-5 flex gap-4">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-500 dark:text-blue-300 shadow-inner">
                <UserIcon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-default-500 dark:text-default-400 text-sm font-medium mb-1">
                  问卷发起人
                </h2>
                <p className="text-lg font-semibold text-default-900 dark:text-white">
                  {metadata.creator || "系统用户"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 题目数量卡片 */}
        <div className="relative group">
          {/* 卡片背后的光晕 */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 to-amber-400/20 dark:from-amber-500/20 dark:to-amber-400/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative backdrop-blur-md bg-white/60 dark:bg-default-950/60 border border-white/50 dark:border-indigo-500/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="p-5 flex gap-4">
              <div className="p-3 rounded-lg bg-amber-100 dark:bg-amber-900/50 text-amber-500 dark:text-amber-300 shadow-inner">
                <ClipboardDocumentListIcon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-default-500 dark:text-default-400 text-sm font-medium mb-1">
                  题目数量
                </h2>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-default-900 dark:text-white">
                    {questionnaireData.length} 道题目
                  </p>
                  <span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50">
                    ID: {metadata.id || "未知"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 创建时间卡片 */}
        {metadata.createTime && (
          <div className="relative group">
            {/* 卡片背后的光晕 */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-emerald-400/20 dark:from-emerald-500/20 dark:to-emerald-400/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative backdrop-blur-md bg-white/60 dark:bg-default-950/60 border border-white/50 dark:border-indigo-500/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="p-5 flex gap-4">
                <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-500 dark:text-emerald-300 shadow-inner">
                  <ClockIcon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-default-500 dark:text-default-400 text-sm font-medium mb-1">
                    创建时间
                  </h2>
                  <p className="text-lg font-semibold text-default-900 dark:text-white">
                    {formatDate(metadata.createTime)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* 开始填写按钮 */}
      <div className="flex justify-center mt-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/60 to-violet-500/60 dark:from-primary-400/40 dark:to-violet-400/40 rounded-full blur-lg opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:blur-xl"></div>
          <Link
            href={`/question?id=${metadata.id || "1"}`}
            className="relative inline-flex items-center justify-center gap-3 px-8 py-4 backdrop-blur-sm bg-primary-600/90 dark:bg-primary-700/90 hover:bg-primary-700/95 dark:hover:bg-primary-600/95 text-lg font-semibold text-white rounded-full shadow-xl shadow-primary-500/30 dark:shadow-primary-800/30 transition-all duration-300 overflow-hidden border border-white/40 dark:border-white/20"
          >
            <span className="relative z-10">开始填写问卷</span>
            <ArrowRightIcon className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-violet-600 dark:from-primary-500 dark:to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
