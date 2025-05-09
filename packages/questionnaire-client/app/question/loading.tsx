import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center m-auto">
      <div className="w-16 h-16 border-4 border-t-4 border-secondary rounded-full animate-spin mb-4" />
      <h3 className="text-xl font-medium text-default-600 dark:text-default-400">
        正在加载问卷...
      </h3>
      <p className="text-sm text-default-500 dark:text-default-500 mt-2">
        请稍候，问卷数据正在从服务器获取
      </p>
    </div>
  );
}
