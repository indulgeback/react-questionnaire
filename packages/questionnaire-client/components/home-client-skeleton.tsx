"use client";

import React from "react";
import { Skeleton } from "@heroui/skeleton";

export default function HomeClientSkeleton() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 relative">
      {" "}
      {/* 保持与主组件一致 */}
      {/* 动态背景 */}
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
      </div>
      {/* 标题区域骨架 */}
      <div className="mb-8 relative">
        <div className="relative backdrop-blur-md bg-white/60 dark:bg-default-950/60 border border-white/50 dark:border-indigo-500/20 rounded-xl p-6 shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-white/5 to-violet-500/10 dark:from-primary-500/20 dark:via-indigo-500/5 dark:to-violet-500/20 opacity-80"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-6 rounded-md" />
              <Skeleton className="h-8 w-48 rounded-lg" />
            </div>
            <Skeleton className="h-4 w-36 rounded-full mt-2" />
          </div>
        </div>
      </div>
      {/* 卡片区域骨架 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* 四个卡片 */}
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-violet-500/20 dark:from-primary-500/10 dark:to-violet-500/10 rounded-xl blur-lg opacity-30"></div>
            <div className="relative backdrop-blur-md bg-white/60 dark:bg-default-950/60 border border-white/50 dark:border-indigo-500/20 rounded-xl overflow-hidden shadow-md">
              <div className="p-5 flex gap-4">
                <Skeleton className="h-12 w-12 rounded-lg" />
                <div className="flex-1">
                  <Skeleton className="h-4 w-24 mb-2 rounded-full" />
                  <Skeleton className="h-7 w-full rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 按钮骨架 */}
      <div className="flex justify-center mt-8">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 to-violet-500/30 dark:from-primary-400/20 dark:to-violet-400/20 rounded-full blur-md opacity-50"></div>
          <Skeleton className="relative h-12 w-36 rounded-full" />
        </div>
      </div>
    </div>
  );
}
