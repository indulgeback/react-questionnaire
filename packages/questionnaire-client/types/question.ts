export enum QuestionType {
  BASE_INFO = "base_info",
  MULTIPLE_CHOICE = "multiple_choice",
  SINGLE_CHOICE = "single_choice",
  TRUE_FALSE = "true_false",
  SHORT_ANSWER = "short_answer",
  PARAGRAPH = "paragraph",
  DROPDOWN = "dropdown",
  RATING = "rating",
  NPS = "nps",
  MATRIX_RADIO = "matrix_radio",
  MATRIX_CHECKBOX = "matrix_checkbox",
  SLIDER = "slider",
  DATE = "date",
  UPLOAD = "upload",
  IMAGE_CHOICE = "image_choice",
  RANK = "rank",
  TITLE = "title"
}

export type Question = {
  id: number;
  type: QuestionType;
  question: string;
  placeholder?: string;
  options?: string[];
  maxLength?: number;
  rows?: number;
  min?: number;
  max?: number;
  step?: number;
  images?: { url: string; text: string }[];
  matrix?: {
    rows: string[];
    columns: string[];
  };
  required?: boolean;
};

export type QuestionContextType = {
  questionList: Question[];
  question: Question;
  index: number;
};

export const questionTypeMap = {
  [QuestionType.BASE_INFO]: "基础信息",
  [QuestionType.MULTIPLE_CHOICE]: "多选题",
  [QuestionType.SINGLE_CHOICE]: "单选题",
  [QuestionType.TRUE_FALSE]: "判断题",
  [QuestionType.SHORT_ANSWER]: "简答题",
  [QuestionType.PARAGRAPH]: "段落题",
  [QuestionType.DROPDOWN]: "下拉选择题",
  [QuestionType.RATING]: "评分题",
  [QuestionType.NPS]: "NPS题",
  [QuestionType.MATRIX_RADIO]: "矩阵单选题",
  [QuestionType.MATRIX_CHECKBOX]: "矩阵多选题",
  [QuestionType.SLIDER]: "滑块题",
  [QuestionType.DATE]: "日期题",
  [QuestionType.UPLOAD]: "上传题",
  [QuestionType.IMAGE_CHOICE]: "图片选择题",
  [QuestionType.RANK]: "排序题",
  [QuestionType.TITLE]: "标题"
};
