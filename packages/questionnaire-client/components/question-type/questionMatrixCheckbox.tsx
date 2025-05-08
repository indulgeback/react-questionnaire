import { Question } from "@/types/question";
import React, { useState, useEffect } from "react";
import useAnswerStore from "@/stores/useAnswerStore";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";

const QuestionMatrixCheckbox = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer } = useAnswerStore();
  const matrix = question.matrix || { rows: [], columns: [] };
  const [selectedValues, setSelectedValues] = useState<Record<string, string[]>>({});

  // 当选择改变时，更新答案存储
  useEffect(() => {
    if (Object.keys(selectedValues).length > 0) {
      addOrUpdateAnswer(question.id, JSON.stringify(selectedValues));
    }
  }, [selectedValues, question.id, addOrUpdateAnswer]);

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
    </div>
  );
};

export default QuestionMatrixCheckbox;
