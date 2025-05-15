import React from "react";
import { Question, QuestionType } from "@/types/question";
import QuestionMultipleChoice from "./questionMultipleChoice";
import QuestionParagraph from "./questionParagraph";
import QuestionShortAnswer from "./questionShortAnswer";
import QuestionSingleChoice from "./questionSingleChoice";
import QuestionDropdown from "./questionDropdown";
import QuestionRating from "./questionRating";
import QuestionNPS from "./questionNPS";
import QuestionMatrixRadio from "./questionMatrixRadio";
import QuestionMatrixCheckbox from "./questionMatrixCheckbox";
import QuestionSlider from "./questionSlider";
import QuestionDate from "./questionDate";
import QuestionTitle from "./questionTitle";

export default function QuestionComponent({ question }: { question: Question }) {
  // 处理题型
  switch (question.type) {
    case QuestionType.QuestionShortAnswer:
      return <QuestionShortAnswer question={question} />;
    case QuestionType.QuestionRadio:
      return <QuestionSingleChoice question={question} />;
    case QuestionType.QuestionCheckbox:
      return <QuestionMultipleChoice question={question} />;
    case QuestionType.QuestionParagraph:
      return <QuestionParagraph question={question} />;
    case QuestionType.QuestionDropdown:
      return <QuestionDropdown question={question} />;
    case QuestionType.QuestionRating:
      return <QuestionRating question={question} />;
    case QuestionType.QuestionNPS:
      return <QuestionNPS question={question} />;
    case QuestionType.QuestionMatrixRadio:
      return <QuestionMatrixRadio question={question} />;
    case QuestionType.QuestionMatrixCheckbox:
      return <QuestionMatrixCheckbox question={question} />;
    case QuestionType.QuestionSlider:
      return <QuestionSlider question={question} />;
    case QuestionType.QuestionDate:
      return <QuestionDate question={question} />;
    case QuestionType.QuestionTitle:
      return <QuestionTitle question={question} />;
    default:
      return <div>未知题型</div>;
  }
}
