import React from "react";
import { Question, QuestionType } from "@/types/question";
import QuestionBaseInfo from "./questionBaseInfo";
import QuestionMultipleChoice from "./questionMultipleChoice";
import QuestionParagraph from "./questionParagraph";
import QuestionShortAnswer from "./questionShortAnswer";
import QuestionSingleChoice from "./questionSingleChoice";
import QuestionTrueOrFalse from "./questionTrueOrFalse";
import QuestionDropdown from "./questionDropdown";
import QuestionRating from "./questionRating";
import QuestionNPS from "./questionNPS";
import QuestionMatrixRadio from "./questionMatrixRadio";
import QuestionMatrixCheckbox from "./questionMatrixCheckbox";
import QuestionSlider from "./questionSlider";
import QuestionDate from "./questionDate";
import QuestionUpload from "./questionUpload";
import QuestionImageChoice from "./questionImageChoice";
import QuestionRank from "./questionRank";
import QuestionTitle from "./questionTitle";

export default function QuestionComponent({ question }: { question: Question }) {
  switch (question.type) {
    case QuestionType.BASE_INFO:
      return <QuestionBaseInfo question={question} />;
    case QuestionType.MULTIPLE_CHOICE:
      return <QuestionMultipleChoice question={question} />;
    case QuestionType.SINGLE_CHOICE:
      return <QuestionSingleChoice question={question} />;
    case QuestionType.TRUE_FALSE:
      return <QuestionTrueOrFalse question={question} />;
    case QuestionType.SHORT_ANSWER:
      return <QuestionShortAnswer question={question} />;
    case QuestionType.PARAGRAPH:
      return <QuestionParagraph question={question} />;
    case QuestionType.DROPDOWN:
      return <QuestionDropdown question={question} />;
    case QuestionType.RATING:
      return <QuestionRating question={question} />;
    case QuestionType.NPS:
      return <QuestionNPS question={question} />;
    case QuestionType.MATRIX_RADIO:
      return <QuestionMatrixRadio question={question} />;
    case QuestionType.MATRIX_CHECKBOX:
      return <QuestionMatrixCheckbox question={question} />;
    case QuestionType.SLIDER:
      return <QuestionSlider question={question} />;
    case QuestionType.DATE:
      return <QuestionDate question={question} />;
    case QuestionType.UPLOAD:
      return <QuestionUpload question={question} />;
    case QuestionType.IMAGE_CHOICE:
      return <QuestionImageChoice question={question} />;
    case QuestionType.RANK:
      return <QuestionRank question={question} />;
    case QuestionType.TITLE:
      return <QuestionTitle question={question} />;
    default:
      return <div>未知题型</div>;
  }
}
