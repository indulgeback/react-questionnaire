import { NextRequest, NextResponse } from "next/server";
import MongoUtils from "@/utils/mongo";
import { Question, QuestionType } from "@/types/question";

// MongoDB集合名称
const COLLECTION_NAME = "questionnaire_details";

// 接口类型定义，与后端一致
interface QuestionnaireDetail {
  questionnaire_id: number;
  title: string;
  description: string;
  questions: Array<{
    id: number;
    type: string;
    question: string;
    options?: string[];
  }>;
  version: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// 从服务器直接获取问卷数据的辅助函数
export async function getQuestionnaireById(id: string | number): Promise<any> {
  try {
    // 从MongoDB获取问卷数据
    const questionnaireDetail = await MongoUtils.findOne<QuestionnaireDetail>(COLLECTION_NAME, {
      questionnaire_id: typeof id === "string" ? parseInt(id) : id
    } as any);

    if (!questionnaireDetail) {
      return null;
    }

    // 转换为纯JavaScript对象，移除MongoDB特有字段
    const serializedDetail = JSON.parse(JSON.stringify(questionnaireDetail));

    // 适配前端需要的数据结构
    return {
      metadata: {
        id: serializedDetail.questionnaire_id.toString(),
        title: serializedDetail.title,
        creator: "System",
        createTime: serializedDetail.createdAt || new Date().toISOString(),
        updateTime: serializedDetail.updatedAt || new Date().toISOString(),
        version: serializedDetail.version,
        description: serializedDetail.description
      },
      questions: serializedDetail.questions.map((q: any) => {
        // 映射后端问题类型到前端类型
        const mappedType = mapQuestionType(q.type);
        // 移除MongoDB添加的_id字段
        const { _id, ...cleanQuestion } = q;
        return {
          ...cleanQuestion,
          type: mappedType
        };
      })
    };
  } catch (error) {
    console.error("获取问卷数据失败:", error);
    return null;
  }
}

/**
 * 获取问卷详情 - 兼容后端数据结构的API
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const questionnaireId = searchParams.get("id");

    if (!questionnaireId) {
      return NextResponse.json({ success: false, message: "问卷ID是必需的" }, { status: 400 });
    }

    const questionnaireData = await getQuestionnaireById(questionnaireId);

    if (!questionnaireData) {
      return NextResponse.json({ success: false, message: "未找到该问卷" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: questionnaireData
    });
  } catch (error) {
    console.error("获取问卷数据失败:", error);
    return NextResponse.json(
      {
        success: false,
        message: "获取问卷数据失败",
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

/**
 * 保存问卷详情 - 兼容后端数据结构的API
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 验证必需字段
    if (!body.metadata || !Array.isArray(body.questions)) {
      return NextResponse.json(
        { success: false, message: "元数据和问题数组是必需的" },
        { status: 400 }
      );
    }

    // 获取问卷ID
    const questionnaireId = parseInt(body.metadata.id);
    if (isNaN(questionnaireId)) {
      return NextResponse.json(
        { success: false, message: "问卷ID必须是有效的数字" },
        { status: 400 }
      );
    }

    // 查询现有问卷获取版本号
    let version = 1;
    const existingQuestionnaire = await MongoUtils.findOne<QuestionnaireDetail>(COLLECTION_NAME, {
      questionnaire_id: questionnaireId
    } as any);

    if (existingQuestionnaire) {
      version = existingQuestionnaire.version + 1;
    }

    // 构建兼容后端的数据结构
    const compatibleData: QuestionnaireDetail = {
      questionnaire_id: questionnaireId,
      title: body.metadata.title || "未命名问卷",
      description: body.metadata.description || "",
      questions: body.questions.map((q: any) => ({
        id: q.id,
        type: mapQuestionTypeToBackend(q.type),
        question: q.question,
        options: q.options
      })),
      version: version
    };

    // 保存到MongoDB
    let result;
    if (existingQuestionnaire) {
      // 更新现有问卷
      result = await MongoUtils.updateOne<QuestionnaireDetail>(
        COLLECTION_NAME,
        { questionnaire_id: questionnaireId } as any,
        compatibleData
      );

      return NextResponse.json({
        success: true,
        message: "问卷更新成功",
        data: {
          id: questionnaireId,
          version: version
        }
      });
    } else {
      // 创建新问卷
      const insertedId = await MongoUtils.insertOne<QuestionnaireDetail>(
        COLLECTION_NAME,
        compatibleData
      );

      return NextResponse.json({
        success: true,
        message: "问卷创建成功",
        data: {
          id: questionnaireId,
          version: version,
          mongoId: insertedId
        }
      });
    }
  } catch (error) {
    console.error("保存问卷数据失败:", error);
    return NextResponse.json(
      {
        success: false,
        message: "保存问卷数据失败",
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

/**
 * 映射后端问题类型到前端类型
 */
function mapQuestionType(backendType: string): QuestionType {
  const typeMap: Record<string, QuestionType> = {
    base_info: QuestionType.BASE_INFO,
    single_choice: QuestionType.SINGLE_CHOICE,
    multiple_choice: QuestionType.MULTIPLE_CHOICE,
    true_false: QuestionType.TRUE_FALSE,
    short_answer: QuestionType.SHORT_ANSWER,
    paragraph: QuestionType.PARAGRAPH,
    dropdown: QuestionType.DROPDOWN,
    rating: QuestionType.RATING,
    nps: QuestionType.NPS,
    matrix_radio: QuestionType.MATRIX_RADIO,
    matrix_checkbox: QuestionType.MATRIX_CHECKBOX,
    slider: QuestionType.SLIDER,
    date: QuestionType.DATE,
    upload: QuestionType.UPLOAD,
    image_choice: QuestionType.IMAGE_CHOICE,
    rank: QuestionType.RANK,
    title: QuestionType.TITLE
  };

  return typeMap[backendType.toLowerCase()] || QuestionType.SINGLE_CHOICE;
}

/**
 * 映射前端问题类型到后端类型
 */
function mapQuestionTypeToBackend(frontendType: QuestionType): string {
  const typeMap: Record<string, string> = {
    [QuestionType.BASE_INFO]: "base_info",
    [QuestionType.SINGLE_CHOICE]: "single_choice",
    [QuestionType.MULTIPLE_CHOICE]: "multiple_choice",
    [QuestionType.TRUE_FALSE]: "true_false",
    [QuestionType.SHORT_ANSWER]: "short_answer",
    [QuestionType.PARAGRAPH]: "paragraph",
    [QuestionType.DROPDOWN]: "dropdown",
    [QuestionType.RATING]: "rating",
    [QuestionType.NPS]: "nps",
    [QuestionType.MATRIX_RADIO]: "matrix_radio",
    [QuestionType.MATRIX_CHECKBOX]: "matrix_checkbox",
    [QuestionType.SLIDER]: "slider",
    [QuestionType.DATE]: "date",
    [QuestionType.UPLOAD]: "upload",
    [QuestionType.IMAGE_CHOICE]: "image_choice",
    [QuestionType.RANK]: "rank",
    [QuestionType.TITLE]: "title"
  };

  return typeMap[frontendType] || "single_choice";
}
