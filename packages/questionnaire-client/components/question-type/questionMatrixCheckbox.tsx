"use client";

import { Question } from "@/types/question";
import React, { useState, useEffect } from "react";
import useAnswerStore from "@/stores/useAnswerStore";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";

const QuestionMatrixCheckbox = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer, getAnswerByQuestionId } = useAnswerStore();
  const matrix = question.matrix || { rows: [], columns: [] };
  const [selectedValues, setSelectedValues] = useState<Record<string, string[]>>({});

  // 组件挂载时检查是否有已保存的答案
  useEffect(() => {
    const savedAnswer = getAnswerByQuestionId(question.fe_id);
    if (savedAnswer && typeof savedAnswer === "string") {
      try {
        const parsedValue = JSON.parse(savedAnswer);
        if (typeof parsedValue === "object") {
          // 确保不把__incomplete__标记当作数据使用
          const cleanValues = { ...parsedValue };
          delete cleanValues.__incomplete__;
          setSelectedValues(cleanValues);
        }
      } catch (e) {
        console.error("Error parsing saved matrix checkbox answer:", e);
      }
    }
  }, [question.fe_id, getAnswerByQuestionId]);

  // 检查是否所有行都已选择
  const allRowsSelected =
    matrix.rows.length > 0 &&
    matrix.rows.every(row => selectedValues[row] && selectedValues[row].length > 0);

  // 当选择改变时，更新答案存储
  useEffect(() => {
    // 只有当所有行都有选择时，才算作完成
    if (allRowsSelected) {
      addOrUpdateAnswer(question.fe_id, JSON.stringify(selectedValues), question.type);
    } else if (Object.keys(selectedValues).length > 0) {
      // 如果有部分选择但并非所有行都选择了，则存储选择但不算完成
      // 通过特殊标记__incomplete__来表示未完成状态
      addOrUpdateAnswer(
        question.fe_id,
        JSON.stringify({
          ...selectedValues,
          __incomplete__: true
        }),
        question.type
      );
    } else {
      // 没有任何选择，清除答案
      addOrUpdateAnswer(question.fe_id, "", question.type);
    }
  }, [selectedValues, question.fe_id, addOrUpdateAnswer, allRowsSelected]);

  const handleChange = (rowId: string, values: string[]) => {
    setSelectedValues(prev => ({
      ...prev,
      [rowId]: values
    }));
  };

  // 检查特定单元格是否被选中
  const isCellSelected = (rowId: string, columnId: string) => {
    return selectedValues[rowId]?.includes(columnId) || false;
  };

  // 切换单个单元格选中状态
  const toggleCell = (rowId: string, columnId: string) => {
    const currentValues = selectedValues[rowId] || [];
    let newValues;

    if (currentValues.includes(columnId)) {
      newValues = currentValues.filter(val => val !== columnId);
    } else {
      newValues = [...currentValues, columnId];
    }

    handleChange(rowId, newValues);
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="font-medium text-base mb-2">{question.question}</label>
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <table className="w-full border-collapse">
          <thead className="bg-default-100 dark:bg-default-50">
            <tr>
              <th className="p-3 border-b border-r text-left font-medium text-default-700 dark:text-white"></th>
              {matrix.columns.map(column => (
                <th
                  key={column}
                  className="p-3 border-b text-center font-medium text-default-700 dark:text-white"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y">
            {matrix.rows.map(row => (
              <tr key={row} className="hover:bg-default-50 dark:hover:bg-default-100/30">
                <td className="p-3 border-r font-medium text-default-700 dark:text-white">{row}</td>
                {matrix.columns.map(column => (
                  <td key={column} className="text-center p-2">
                    <div className="flex justify-center">
                      <Checkbox
                        isSelected={isCellSelected(row, column)}
                        onValueChange={() => toggleCell(row, column)}
                        color="secondary"
                        size="sm"
                        aria-label={`${row} - ${column}`}
                      >
                        <span className="sr-only">{column}</span>
                      </Checkbox>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!allRowsSelected && Object.keys(selectedValues).length > 0 && (
        <p className="text-xs text-orange-500 dark:text-orange-400 mt-1">请完成所有行的选择</p>
      )}
    </div>
  );
};

export default QuestionMatrixCheckbox;
