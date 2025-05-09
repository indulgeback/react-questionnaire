import { NextResponse } from "next/server";
import { QuestionType } from "@/types/question";
import MongoUtils from "@/utils/mongo";

// 新增兼容后端的集合名称常量
const COMPATIBLE_COLLECTION_NAME = "questionnaire_details";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "缺少问卷ID参数" }, { status: 400 });
  }

  try {
    const questionnaireDetail = await MongoUtils.findOne(COMPATIBLE_COLLECTION_NAME, {
      questionnaire_id: Number(id)
    } as any);

    if (!questionnaireDetail) {
      return NextResponse.json({ error: "未找到该问卷" }, { status: 404 });
    }

    // 转换为纯JavaScript对象，移除MongoDB特有字段
    const serializedDetail = JSON.parse(JSON.stringify(questionnaireDetail));

    // 适配前端需要的数据结构
    const data = {
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

    return NextResponse.json(data);
  } catch (error) {
    console.error("获取问卷数据出错:", error);
    return NextResponse.json({ error: "获取问卷数据失败" }, { status: 500 });
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
