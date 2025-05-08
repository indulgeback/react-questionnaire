import { NextRequest, NextResponse } from "next/server";
import MongoUtils from "@/utils/mongo";

// 问卷答案接口
interface QuestionnaireAnswer {
  questionnaireId: string;
  userId?: string;
  answers: Array<{
    questionId: number;
    value: any;
  }>;
  metadata?: {
    submitTime: string;
    userAgent?: string;
    ipAddress?: string;
  };
}

// 集合名称
const COLLECTION_NAME = "questionnaire_answers";

/**
 * 获取问卷答案列表
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const questionnaireId = searchParams.get("questionnaireId");

    if (!questionnaireId) {
      return NextResponse.json({ success: false, message: "问卷ID是必需的" }, { status: 400 });
    }

    // 查询指定问卷的所有答案
    const answers = await MongoUtils.find<QuestionnaireAnswer>(COLLECTION_NAME, {
      questionnaireId
    } as any);

    return NextResponse.json({
      success: true,
      data: answers
    });
  } catch (error) {
    console.error("获取问卷答案失败:", error);
    return NextResponse.json(
      {
        success: false,
        message: "获取问卷答案失败",
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}

/**
 * 保存问卷答案
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 验证必需字段
    if (!body.questionnaireId || !Array.isArray(body.answers)) {
      return NextResponse.json(
        { success: false, message: "问卷ID和答案数组是必需的" },
        { status: 400 }
      );
    }

    // 准备要存储的数据
    const answerData: QuestionnaireAnswer = {
      questionnaireId: body.questionnaireId,
      userId: body.userId || undefined,
      answers: body.answers,
      metadata: {
        submitTime: new Date().toISOString(),
        userAgent: request.headers.get("user-agent") || undefined,
        ipAddress: request.headers.get("x-forwarded-for") || undefined
      }
    };

    // 保存到MongoDB
    const insertedId = await MongoUtils.insertOne<QuestionnaireAnswer>(COLLECTION_NAME, answerData);

    return NextResponse.json({
      success: true,
      message: "问卷答案保存成功",
      data: {
        id: insertedId
      }
    });
  } catch (error) {
    console.error("保存问卷答案失败:", error);
    return NextResponse.json(
      {
        success: false,
        message: "保存问卷答案失败",
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
