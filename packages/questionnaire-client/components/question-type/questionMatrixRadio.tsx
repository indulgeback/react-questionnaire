import { Question } from "@/types/question";
import React, { useState } from "react";

const QuestionMatrixRadio = ({ question }: { question: Question }) => {
  const matrix = question.matrix || { rows: [], columns: [] };
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});

  const handleChange = (rowId: string, value: string) => {
    setSelectedValues(prev => ({
      ...prev,
      [rowId]: value
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="font-medium text-base">{question.question}</label>
      <div className="border rounded-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 border-b border-r text-left font-medium text-gray-700"></th>
              {matrix.columns.map(column => (
                <th key={column} className="p-3 border-b text-center font-medium text-gray-700">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.rows.map(row => (
              <tr key={row} className="border-b last:border-b-0">
                <td className="p-3 border-r font-medium text-gray-700">{row}</td>
                {matrix.columns.map(column => (
                  <td key={`${row}-${column}`} className="p-3 text-center">
                    <input
                      type="radio"
                      name={`matrix-${row}`}
                      checked={selectedValues[row] === column}
                      onChange={() => handleChange(row, column)}
                      className="h-4 w-4 accent-secondary focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                    />
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
