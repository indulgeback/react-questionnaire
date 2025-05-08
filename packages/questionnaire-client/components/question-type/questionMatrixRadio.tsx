import { Question } from "@/types/question";
import React, { useState, useEffect } from "react";
import useAnswerStore from "@/stores/useAnswerStore";
import { Radio, RadioGroup } from "@heroui/radio";

const QuestionMatrixRadio = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer, getAnswerByQuestionId } = useAnswerStore();
  const matrix = question.matrix || { rows: [], columns: [] };
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});

  // 组件挂载时检查是否有已保存的答案
  useEffect(() => {
    const savedAnswer = getAnswerByQuestionId(question.id);
    if (savedAnswer && typeof savedAnswer === "string") {
      try {
        const parsedValue = JSON.parse(savedAnswer);
        if (typeof parsedValue === "object") {
          setSelectedValues(parsedValue);
        }
      } catch (e) {
        console.error("Error parsing saved matrix radio answer:", e);
      }
    }
  }, [question.id, getAnswerByQuestionId]);

  // 检查是否所有行都已选择
  const allRowsSelected =
    matrix.rows.length > 0 &&
    matrix.rows.every(row => selectedValues[row] !== undefined && selectedValues[row] !== "");

  // 当选择改变时，更新答案存储
  useEffect(() => {
    // 只有当所有行都有选择时，才算作完成
    if (allRowsSelected) {
      addOrUpdateAnswer(question.id, JSON.stringify(selectedValues), question.type);
    } else if (Object.keys(selectedValues).length > 0) {
      // 如果有部分选择但并非所有行都选择了，则存储选择但不算完成
      // 通过特殊标记__incomplete__来表示未完成状态
      addOrUpdateAnswer(
        question.id,
        JSON.stringify({
          ...selectedValues,
          __incomplete__: true
        }),
        question.type
      );
    } else {
      // 没有任何选择，清除答案
      addOrUpdateAnswer(question.id, "", question.type);
    }
  }, [selectedValues, question.id, addOrUpdateAnswer, allRowsSelected]);

  const handleChange = (rowId: string, value: string) => {
    setSelectedValues(prev => ({
      ...prev,
      [rowId]: value
    }));
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
                      <RadioGroup
                        value={selectedValues[row] || ""}
                        onValueChange={value => handleChange(row, value)}
                        className="flex justify-center"
                      >
                        <Radio value={column} color="secondary" size="sm">
                          <span className="sr-only">{column}</span>
                        </Radio>
                      </RadioGroup>
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

export default QuestionMatrixRadio;
