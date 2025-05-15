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

    if (!serializedDetail.components) {
      return NextResponse.json({ error: "问卷数据格式错误" }, { status: 500 });
    }

    // 适配前端需要的数据结构
    const data = {
      metadata: {
        id: serializedDetail.questionnaire_id.toString(),
        title: serializedDetail.title,
        creator: serializedDetail.creator,
        createTime: serializedDetail.createdAt || new Date().toISOString(),
        updateTime: serializedDetail.updatedAt || new Date().toISOString(),
        version: serializedDetail.version,
        description: serializedDetail.description
      },
      questions: serializedDetail.components.map((component: any, index: number) => {
        // 移除MongoDB添加的_id字段
        const { _id, ...rest } = component;

        // 直接使用前端类型
        const questionType = component.type as QuestionType;

        // 构建前端所需的问题结构
        return {
          id: index + 1, // 使用索引作为问题ID
          fe_id: component.fe_id, // 保留fe_id
          type: questionType,
          question: component.props.title || component.title, // 使用组件的props.title或title作为问题内容
          // 根据不同组件类型提取所需属性
          ...(component.props.options && { options: component.props.options }),
          ...(component.props.placeholder && { placeholder: component.props.placeholder }),
          ...(component.props.maxLength && { maxLength: component.props.maxLength }),
          ...(component.props.rows && { rows: component.props.rows }),
          ...(component.props.count && { max: component.props.count }),
          ...(component.props.min !== undefined && { min: component.props.min }),
          ...(component.props.max !== undefined && { max: component.props.max }),
          ...(component.props.step && { step: component.props.step }),
          ...(component.props.columns &&
            component.props.rows && {
              matrix: {
                rows: component.props.rows,
                columns: component.props.columns
              }
            }),
          // 保存原始props以便需要时使用
          props: component.props
        };
      })
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error("获取问卷数据出错:", error);
    return NextResponse.json({ error: "获取问卷数据失败" }, { status: 500 });
  }
}
