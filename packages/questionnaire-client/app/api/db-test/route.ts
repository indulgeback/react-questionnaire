import { NextResponse } from "next/server";
import clientPromise from "@/config/mongo";

export async function GET() {
  try {
    // 连接到MongoDB
    const client = await clientPromise;
    const db = client.db("questionnaire_mongo_db");

    // 获取所有集合名称
    const collections = await db.listCollections().toArray();
    console.log(collections);
    const collectionNames = collections.map(collection => collection.name);

    // 执行简单的数据库测试查询
    const dbStats = await db.stats();

    return NextResponse.json({
      success: true,
      message: "MongoDB连接成功",
      data: {
        dbName: db.databaseName,
        collections: collectionNames,
        stats: dbStats
      }
    });
  } catch (error) {
    console.error("MongoDB连接错误:", error);
    return NextResponse.json(
      {
        success: false,
        message: "MongoDB连接失败",
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
