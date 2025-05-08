import { NextResponse } from "next/server";
import { Question, QuestionType } from "@/types/question";
import MongoUtils from "@/utils/mongo";

// 常量定义
const COLLECTION_NAME = "questionnaires";
const DEFAULT_QUESTIONNAIRE_ID = "default";

// 生成测试数据 - 这部分可以替换为真实的数据库查询
export const generateQuestionnaireData = () => {
  // 问卷元数据
  const metadata = {
    id: DEFAULT_QUESTIONNAIRE_ID,
    title: "校园暴力行为",
    creator: "IndulgeBack",
    createTime: new Date().toISOString(),
    updateTime: new Date().toISOString()
  };

  // 问题数据
  const questions: Question[] = [
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
        {
          url: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop",
          text: "简约风格"
        },
        {
          url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop",
          text: "自然风格"
        },
        {
          url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop",
          text: "复古风格"
        },
        {
          url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
          text: "现代风格"
        }
      ]
    },
    {
      id: 17,
      type: QuestionType.RANK,
      question: "请对以下因素按重要性进行排序",
      options: ["价格", "质量", "服务", "品牌", "便利性"]
    }
  ];

  // 返回完整的问卷数据结构
  return {
    metadata,
    questions
  };
};

// 确保默认问卷存在于数据库中
async function ensureDefaultQuestionnaire() {
  try {
    // 检查数据库中是否已存在默认问卷
    const existingQuestionnaire = await MongoUtils.findOne(COLLECTION_NAME, {
      "metadata.id": DEFAULT_QUESTIONNAIRE_ID
    } as any);

    // 如果不存在，则创建默认问卷
    if (!existingQuestionnaire) {
      const defaultData = generateQuestionnaireData();
      await MongoUtils.insertOne(COLLECTION_NAME, defaultData);
      console.log("已创建默认问卷");
    }
  } catch (error) {
    console.error("确保默认问卷存在时出错:", error);
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const questionnaireId = searchParams.get("id") || DEFAULT_QUESTIONNAIRE_ID;

    // 确保默认问卷存在
    await ensureDefaultQuestionnaire();

    // 从MongoDB获取问卷数据
    let questionnaireData = await MongoUtils.findOne(COLLECTION_NAME, {
      "metadata.id": questionnaireId
    } as any);

    // 如果没有找到指定ID的问卷，返回默认问卷
    if (!questionnaireData) {
      questionnaireData = await MongoUtils.findOne(COLLECTION_NAME, {
        "metadata.id": DEFAULT_QUESTIONNAIRE_ID
      } as any);

      // 如果仍然没有找到，生成一个默认问卷
      if (!questionnaireData) {
        questionnaireData = generateQuestionnaireData() as any;
      }
    }

    // 添加300ms延迟模拟网络请求
    await new Promise(resolve => setTimeout(resolve, 300));

    // 移除MongoDB的_id字段后返回数据
    const responseData = {
      ...questionnaireData,
      _id: undefined
    };

    return NextResponse.json({
      success: true,
      data: responseData
    });
  } catch (error) {
    console.error("获取问卷数据失败:", error);
    return NextResponse.json({ success: false, message: "获取问卷数据失败" }, { status: 500 });
  }
}

// 添加保存问卷的POST接口
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 验证必需字段
    if (!body.metadata || !Array.isArray(body.questions)) {
      return NextResponse.json(
        { success: false, message: "元数据和问题数组是必需的" },
        { status: 400 }
      );
    }

    // 确保问卷有ID
    if (!body.metadata.id) {
      body.metadata.id = Date.now().toString();
    }

    // 检查问卷是否已存在
    const existingQuestionnaire = await MongoUtils.findOne(COLLECTION_NAME, {
      "metadata.id": body.metadata.id
    } as any);

    let result;
    if (existingQuestionnaire) {
      // 更新已存在的问卷
      result = await MongoUtils.updateOne(
        COLLECTION_NAME,
        { "metadata.id": body.metadata.id } as any,
        body
      );

      return NextResponse.json({
        success: true,
        message: "问卷更新成功",
        data: { id: body.metadata.id }
      });
    } else {
      // 创建新问卷
      const insertedId = await MongoUtils.insertOne(COLLECTION_NAME, body);

      return NextResponse.json({
        success: true,
        message: "问卷创建成功",
        data: { id: body.metadata.id, mongoId: insertedId }
      });
    }
  } catch (error) {
    console.error("保存问卷数据失败:", error);
    return NextResponse.json({ success: false, message: "保存问卷数据失败" }, { status: 500 });
  }
}
