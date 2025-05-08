import { Question } from "@/types/question";
import React, { useState, useEffect } from "react";
import useAnswerStore from "@/stores/useAnswerStore";

const QuestionRank = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer } = useAnswerStore();
  const options = question.options || [];
  const [rankedItems, setRankedItems] = useState<string[]>([]);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  // 初始化排序项
  useEffect(() => {
    if (rankedItems.length === 0 && options.length > 0) {
      const initialRanking = [...options];
      setRankedItems(initialRanking);
      // 自动保存初始排序，使问题状态为已完成
      addOrUpdateAnswer(question.id, JSON.stringify(initialRanking));
    }
  }, [options, addOrUpdateAnswer, question.id]);

  // 当排序改变时更新答案
  useEffect(() => {
    if (rankedItems.length > 0) {
      addOrUpdateAnswer(question.id, JSON.stringify(rankedItems));
    }
  }, [rankedItems, addOrUpdateAnswer, question.id]);

  const handleDragStart = (e: React.DragEvent, item: string) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetItem: string) => {
    e.preventDefault();
    if (draggedItem === null) return;

    const newRankedItems = [...rankedItems];
    const draggedIndex = newRankedItems.indexOf(draggedItem);
    const targetIndex = newRankedItems.indexOf(targetItem);

    if (draggedIndex !== -1 && targetIndex !== -1) {
      newRankedItems.splice(draggedIndex, 1);
      newRankedItems.splice(targetIndex, 0, draggedItem);
      setRankedItems(newRankedItems);
    }
    setDraggedItem(null);
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="font-medium text-base">{question.question}</label>
      <p className="text-sm text-default-600 dark:text-default-400">
        请拖拽选项调整排序（从上到下，排序从高到低）
      </p>
      <ul className="mt-2 space-y-2">
        {rankedItems.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={e => handleDragStart(e, item)}
            onDragOver={handleDragOver}
            onDrop={e => handleDrop(e, item)}
            className={`p-3 border rounded-lg bg-background dark:bg-default-50 flex items-center cursor-move ${
              draggedItem === item ? "opacity-50" : ""
            }`}
          >
            <span className="inline-flex items-center justify-center w-6 h-6 mr-3 bg-secondary-100 dark:bg-secondary-900 rounded-full text-secondary-800 dark:text-secondary-100 text-sm font-medium">
              {index + 1}
            </span>
            <span className="text-default-700 dark:text-white">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionRank;
