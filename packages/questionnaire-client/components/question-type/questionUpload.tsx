import { Question } from "@/types/question";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@heroui/button";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionUpload = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer, getAnswerByQuestionId } = useAnswerStore();
  const [files, setFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]); // 仅用于回显
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 回显逻辑（仅回显文件名）
  useEffect(() => {
    const saved = getAnswerByQuestionId(question.id);
    if (typeof saved === "string") {
      try {
        const arr = JSON.parse(saved);
        if (Array.isArray(arr)) {
          setFileNames(arr);
        }
      } catch (e) {
        // ignore error
      }
    }
  }, [question.id, getAnswerByQuestionId]);

  // 文件变更时更新答案状态
  useEffect(() => {
    if (files.length > 0) {
      // 保存文件名列表作为答案，实际文件上传会在表单提交时处理
      const fileNames = files.map(file => file.name);
      addOrUpdateAnswer(question.id, JSON.stringify(fileNames), question.type);
      setFileNames(fileNames);
    }
  }, [files, addOrUpdateAnswer, question.id]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    setFileNames(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="font-medium text-base">{question.question}</label>
      <div
        className="border-2 border-dashed border-default-300 dark:border-default-600 rounded-lg p-6 text-center cursor-pointer transition-colors hover:border-secondary hover:bg-secondary-50/50 dark:hover:bg-secondary-900/10"
        onClick={() => fileInputRef.current?.click()}
      >
        <svg
          className="mx-auto h-12 w-12 text-default-400 dark:text-default-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          ></path>
        </svg>
        <p className="mt-2 text-sm text-default-600 dark:text-default-400">
          点击或拖拽文件到此处上传
        </p>
        <p className="mt-1 text-xs text-default-500 dark:text-default-500">
          {question.placeholder || "支持多种文件格式"}
        </p>
      </div>
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
        multiple
      />

      {(files.length > 0 || fileNames.length > 0) && (
        <ul className="mt-2 space-y-2">
          {(files.length > 0 ? files.map(file => file.name) : fileNames).map((name, index) => (
            <li
              key={index}
              className="py-2 px-3 flex justify-between items-center border rounded-lg bg-default-50 dark:bg-default-100"
            >
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-secondary mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm truncate font-medium text-default-700 dark:text-white">
                  {name}
                </span>
              </div>
              <Button
                size="sm"
                variant="light"
                color="danger"
                isIconOnly
                onClick={e => {
                  e.stopPropagation(); // 防止触发上传区域点击
                  removeFile(index);
                }}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuestionUpload;
