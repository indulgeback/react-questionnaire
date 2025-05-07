import { Question } from "@/types/question";
import React, { useState, useEffect } from "react";

const QuestionRank = ({ question }: { question: Question }) => {
  const options = question.options || [];
  const [rankedItems, setRankedItems] = useState<string[]>([]);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  useEffect(() => {
    if (rankedItems.length === 0 && options.length > 0) {
      setRankedItems([...options]);
    }
  }, [options]);

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
      <p className="text-sm text-gray-600">请拖拽选项调整排序（从上到下，排序从高到低）</p>
      <ul className="mt-2 space-y-2">
        {rankedItems.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={e => handleDragStart(e, item)}
            onDragOver={handleDragOver}
            onDrop={e => handleDrop(e, item)}
            className={`p-3 border rounded-lg bg-white flex items-center cursor-move ${
              draggedItem === item ? "opacity-50" : ""
            }`}
          >
            <span className="inline-flex items-center justify-center w-6 h-6 mr-3 bg-secondary-100 rounded-full text-secondary-800 text-sm font-medium">
              {index + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionRank;
