// 与前端(FE)对齐的问题类型枚举
export enum QuestionType {
  QuestionShortAnswer = "questionShortAnswer",
  QuestionRadio = "questionRadio",
  QuestionCheckbox = "questionCheckbox",
  QuestionParagraph = "questionParagraph",
  QuestionDropdown = "questionDropdown",
  QuestionRating = "questionRating",
  QuestionNPS = "questionNPS",
  QuestionMatrixRadio = "questionMatrixRadio",
  QuestionMatrixCheckbox = "questionMatrixCheckbox",
  QuestionSlider = "questionSlider",
  QuestionDate = "questionDate",
  QuestionTitle = "questionTitle"
}

// 与前端组件数据结构对齐的问题类型
export type QuestionComponent = {
  fe_id: string;
  type: QuestionType;
  title: string;
  props: any;
};

// 问题类型结构
export type Question = {
  fe_id: string;
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
  props?: any; // 保存原始props以便需要时使用
};

// 前端对齐的问题类型映射
export const feAlignedQuestionTypeMap = {
  [QuestionType.QuestionShortAnswer]: "简答题",
  [QuestionType.QuestionRadio]: "单选题",
  [QuestionType.QuestionCheckbox]: "多选题",
  [QuestionType.QuestionParagraph]: "段落题",
  [QuestionType.QuestionDropdown]: "下拉选择题",
  [QuestionType.QuestionRating]: "评分题",
  [QuestionType.QuestionNPS]: "NPS评分题",
  [QuestionType.QuestionMatrixRadio]: "矩阵单选题",
  [QuestionType.QuestionMatrixCheckbox]: "矩阵多选题",
  [QuestionType.QuestionSlider]: "滑块题",
  [QuestionType.QuestionDate]: "日期选择题",
  [QuestionType.QuestionTitle]: "分段标题"
};
