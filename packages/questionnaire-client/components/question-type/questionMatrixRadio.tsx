import { Question } from "@/types/question";
import React, { useState, useEffect } from "react";
import useAnswerStore from "@/stores/useAnswerStore";
import { Radio, RadioGroup } from "@heroui/radio";

const QuestionMatrixRadio = ({ question }: { question: Question }) => {
  const { addOrUpdateAnswer } = useAnswerStore();
  const matrix = question.matrix || { rows: [], columns: [] };
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});

  // 当选择改变时，更新答案存储
  useEffect(() => {
    if (Object.keys(selectedValues).length > 0) {
      addOrUpdateAnswer(question.id, JSON.stringify(selectedValues));
    }
  }, [selectedValues, question.id, addOrUpdateAnswer]);

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
    </div>
  );
};

export default QuestionMatrixRadio;
