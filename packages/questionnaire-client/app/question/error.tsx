"use client";

import React from "react";
import { Button } from "@heroui/button";

interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-16 h-16 flex items-center justify-center bg-red-50 dark:bg-red-900/20 rounded-full mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-red-500"
        >
          <path
            fillRule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h3 className="text-xl font-medium text-default-700 dark:text-default-300 mb-2">
        加载问卷失败
      </h3>
      <p className="text-sm text-default-500 dark:text-default-500 mb-6 max-w-md text-center">
        {error.message || "抱歉，获取问卷数据时出现错误，请稍后再试。"}
      </p>
      <Button color="secondary" variant="flat" size="lg" onPress={reset}>
        重新加载
      </Button>
    </div>
  );
}
