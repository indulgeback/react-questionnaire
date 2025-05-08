import MongoUtils from "./mongo";
import { generateQuestionnaireData } from "@/app/api/questionnaire/route";

// MongoDB集合名称
const COLLECTION_NAME = "questionnaire_details";

/**
 * 确保MongoDB中存在默认问卷
 * 如果不存在，则创建一个默认问卷
 */
export async function ensureDefaultQuestionnaire(): Promise<void> {
  try {
    // 检查是否已有ID为1的问卷
    const existingQuestionnaire = await MongoUtils.findOne(COLLECTION_NAME, {
      questionnaire_id: 1
    } as any);

    if (!existingQuestionnaire) {
      console.log("MongoDB中未找到默认问卷，创建中...");

      // 获取默认问卷数据
      const defaultData = generateQuestionnaireData();

      // 转换为MongoDB兼容格式
      const mongoData = {
        questionnaire_id: 1,
        title: defaultData.metadata.title,
        description: defaultData.metadata.title, // 使用标题作为描述
        questions: defaultData.questions.map(q => ({
          id: q.id,
          type: q.type.toLowerCase(),
          question: q.question,
          options: q.options
        })),
        version: 1
      };

      // 保存到MongoDB
      await MongoUtils.insertOne(COLLECTION_NAME, mongoData);
      console.log("默认问卷已成功创建");
    } else {
      console.log("MongoDB中已存在默认问卷");
    }
  } catch (error) {
    console.error("确保默认问卷时出错:", error);
  }
}
