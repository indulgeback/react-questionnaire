import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function QuestionnaireSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-16">
      <CheckCircleIcon className="w-24 h-24 text-green-500 mb-6 animate-bounce" />
      <h1 className="text-3xl font-bold text-default-900 dark:text-white mb-4">提交成功！</h1>
      <p className="text-lg text-default-600 dark:text-default-300 mb-8">
        感谢您的认真填写，您的问卷已成功提交。
      </p>
    </div>
  );
}
