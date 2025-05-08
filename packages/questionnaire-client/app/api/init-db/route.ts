import { NextResponse } from "next/server";
import { ensureDefaultQuestionnaire } from "@/utils/ensureDefaultQuestionnaire";

export async function GET() {
  try {
    // 初始化默认问卷数据
    await ensureDefaultQuestionnaire();

    return NextResponse.json({
      success: true,
      message: "MongoDB数据初始化成功"
    });
  } catch (error) {
    console.error("初始化MongoDB数据失败:", error);
    return NextResponse.json(
      {
        success: false,
        message: "初始化MongoDB数据失败",
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
