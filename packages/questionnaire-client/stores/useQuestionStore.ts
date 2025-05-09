import { create } from "zustand";
import { Question, QuestionType } from "@/types/question";

interface QuestionState {
  metadata: {
    title: string;
    creator: string;
    id?: string;
    createTime?: string;
    updateTime?: string;
    version?: number;
    description?: string;
  };
  questionnaireData: Question[];
  initializeMetadata: (metadata: {
    title: string;
    creator: string;
    id?: string;
    createTime?: string;
    updateTime?: string;
    version?: number;
    description?: string;
  }) => void;
  initializeQuestionnaireData: (data: Question[]) => void;
  loadTestData: () => void;
}

// 生成测试数据
const generateTestData = (): Question[] => {
  return [
    {
      id: 1,
      type: QuestionType.TITLE,
      question: "问卷调查示例",
      placeholder: "这是一个演示所有题型的问卷，请认真填写"
    },
    {
      id: 2,
      type: QuestionType.BASE_INFO,
      question: "请填写您的基本信息",
      placeholder: "姓名、联系方式等"
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      question: "您的性别是？",
      options: ["男", "女", "其他", "不愿透露"]
    },
    {
      id: 4,
      type: QuestionType.MULTIPLE_CHOICE,
      question: "您平时喜欢哪些活动？(可多选)",
      options: ["读书", "运动", "旅游", "音乐", "电影", "游戏", "其他"]
    },
    {
      id: 5,
      type: QuestionType.TRUE_FALSE,
      question: "您是否有定期锻炼的习惯？",
      options: ["是", "否"]
    },
    {
      id: 6,
      type: QuestionType.SHORT_ANSWER,
      question: "您对本次活动有什么建议？",
      placeholder: "请简要描述您的想法",
      maxLength: 100
    },
    {
      id: 7,
      type: QuestionType.PARAGRAPH,
      question: "请详细描述您的期望和需求",
      placeholder: "可以尽量详细地描述",
      rows: 5,
      maxLength: 500
    },
    {
      id: 8,
      type: QuestionType.DROPDOWN,
      question: "您的年龄段是？",
      options: ["18岁以下", "18-25岁", "26-35岁", "36-45岁", "46-55岁", "56岁以上"],
      placeholder: "请选择年龄段"
    },
    {
      id: 9,
      type: QuestionType.RATING,
      question: "请为我们的服务打分",
      max: 5
    },
    {
      id: 10,
      type: QuestionType.NPS,
      question: "您向朋友推荐我们产品的可能性有多大？"
    },
    {
      id: 11,
      type: QuestionType.MATRIX_RADIO,
      question: "请对以下方面进行评价",
      matrix: {
        rows: ["服务态度", "产品质量", "价格合理性", "用户体验"],
        columns: ["非常满意", "满意", "一般", "不满意", "非常不满意"]
      }
    },
    {
      id: 12,
      type: QuestionType.MATRIX_CHECKBOX,
      question: "您在使用我们的产品时，遇到过哪些问题？（可多选）",
      matrix: {
        rows: ["注册登录", "支付功能", "客户服务", "产品使用"],
        columns: ["经常", "偶尔", "很少", "从未"]
      }
    },
    {
      id: 13,
      type: QuestionType.SLIDER,
      question: "您认为产品的易用性如何？",
      min: 0,
      max: 10,
      step: 1
    },
    {
      id: 14,
      type: QuestionType.DATE,
      question: "请选择您的出生日期",
      placeholder: "年/月/日"
    },
    {
      id: 15,
      type: QuestionType.UPLOAD,
      question: "请上传相关文件或图片",
      placeholder: "支持jpg、png、pdf格式，大小不超过2MB"
    },
    {
      id: 16,
      type: QuestionType.IMAGE_CHOICE,
      question: "您最喜欢下面哪种风格的设计？",
      images: [
        { url: "https://placehold.co/300x200/4A90E2/FFFFFF?text=简约风格", text: "简约风格" },
        { url: "https://placehold.co/300x200/50E3C2/FFFFFF?text=自然风格", text: "自然风格" },
        { url: "https://placehold.co/300x200/F5A623/FFFFFF?text=复古风格", text: "复古风格" },
        { url: "https://placehold.co/300x200/D0021B/FFFFFF?text=现代风格", text: "现代风格" }
      ]
    },
    {
      id: 17,
      type: QuestionType.RANK,
      question: "请对以下因素按重要性进行排序",
      options: ["价格", "质量", "服务", "品牌", "便利性"]
    }
  ];
};

const useQuestionStore = create<QuestionState>((set, get) => ({
  metadata: {
    title: "",
    creator: ""
  },
  questionnaireData: [],

  initializeMetadata: metadata => set({ metadata }),
  initializeQuestionnaireData: data => set({ questionnaireData: data }),

  loadTestData: () => {
    const testData = generateTestData();
    set({ questionnaireData: testData });
  }
}));

export default useQuestionStore;
