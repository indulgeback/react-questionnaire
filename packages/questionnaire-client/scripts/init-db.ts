// 这个文件可以手动运行来初始化数据库

// 数据库连接配置
import { MongoClient } from "mongodb";

// 连接字符串 - 与项目配置保持一致
const uri = "mongodb://admin:12345678@localhost:27017/questionnaire_mongo_db?authSource=admin";
const client = new MongoClient(uri);

// 模拟问卷数据
const defaultQuestionnaire = {
  questionnaire_id: 1,
  title: "校园暴力行为",
  description: "问卷调查示例",
  questions: [
    {
      id: 1,
      type: "title",
      question: "问卷调查示例",
      placeholder: "这是一个演示所有题型的问卷，请认真填写"
    },
    {
      id: 2,
      type: "base_info",
      question: "请填写您的基本信息",
      placeholder: "姓名、联系方式等"
    },
    {
      id: 3,
      type: "single_choice",
      question: "您的性别是？",
      options: ["男", "女", "其他", "不愿透露"]
    }
    // 可以根据需要添加更多问题
  ],
  version: 1,
  createdAt: new Date(),
  updatedAt: new Date()
};

async function initDb() {
  try {
    await client.connect();
    console.log("已连接到MongoDB");

    const db = client.db("questionnaire_mongo_db");
    const collection = db.collection("questionnaire_details");

    // 检查是否已有数据
    const existingData = await collection.findOne({ questionnaire_id: 1 });

    if (existingData) {
      console.log("默认问卷已存在，无需初始化");
    } else {
      // 插入默认数据
      await collection.insertOne(defaultQuestionnaire);
      console.log("默认问卷数据已初始化");
    }
  } catch (error) {
    console.error("初始化数据库时出错:", error);
  } finally {
    await client.close();
    console.log("数据库连接已关闭");
  }
}

// 执行初始化
initDb();
