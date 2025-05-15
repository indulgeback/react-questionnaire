import { NextResponse } from "next/server";
import MongoUtils from "@/utils/mongo";

const COLLECTION_NAME = "questionnaire_answers";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { questionnaire_id, answers, metadata } = body;

    if (!questionnaire_id || !answers) {
      return NextResponse.json({ error: "缺少必要参数" }, { status: 400 });
    }

    const result = await MongoUtils.insertOne(COLLECTION_NAME, {
      questionnaire_id: Number(questionnaire_id),
      answers,
      metadata: {
        ...metadata,
        submit_time: new Date()
      }
    });

    return NextResponse.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error("保存答案失败:", error);
    return NextResponse.json({ error: "保存答案失败" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const questionnaireId = searchParams.get("questionnaireId");

  if (!questionnaireId) {
    return NextResponse.json({ error: "缺少问卷ID参数" }, { status: 400 });
  }

  try {
    const answers = await MongoUtils.find(COLLECTION_NAME, {
      questionnaire_id: Number(questionnaireId)
    });

    return NextResponse.json({
      success: true,
      data: answers
    });
  } catch (error) {
    console.error("获取答案失败:", error);
    return NextResponse.json({ error: "获取答案失败" }, { status: 500 });
  }
}
