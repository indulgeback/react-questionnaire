"use client";

import { Radio, RadioGroup } from "@nextui-org/radio";
import React, { useState } from "react";

const QuestionRadio = () => {
  const [questionData, setQuestionData] = useState({
    question: "What is your favorite city?",
    answer: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, animi ipsam eaque nihil perferendis inventore laudantium. Ea modi quasi deserunt optio, libero accusamus vitae, error sint labore dolores culpa dolore. Sint voluptates facere quis minus, possimus nobis error laborum repellendus!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, animi ipsam eaque nihil perferendis inventore laudantium. Ea modi quasi deserunt optio, libero accusamus vitae, error sint labore dolore dolore. Sint voluptates facere quis minus, possimus nobis error laborum repellendus!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, animi ipsam eaque nihil perferendis inventore laudantium. Ea modi quasi deserunt optio, libero accusamus vitae, error sint labore dolores cue. Sint voluptates facere quis minus, possimus nobis error laborum repellendus!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, animi ipsam eaque nihil perferendis inventore laudantium. Ea modi quasi deserunt optio, libero accusamus vitae, error sint labore dolores culpa doloris minus, possimus nobis error laborum repellendus!",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, animi ipsam eaque nihil perferendis inventore laudantium. Ea modi quasi deserunt optio, libero accusamus vitae, error sint labore dolores culpa dolore. Sint quis minus, possimus nobis error laborum repellendus!"
    ]
  });

  return (
    <RadioGroup label={questionData.question}>
      {questionData.answer.map(answer => (
        <Radio color="secondary" key={answer} value={answer}>
          {answer}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default QuestionRadio;
