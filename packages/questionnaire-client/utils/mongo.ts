import clientPromise from "@/config/mongo";
import {
  Collection,
  Db,
  Document,
  Filter,
  FindOptions,
  ObjectId,
  OptionalUnlessRequiredId,
  WithId
} from "mongodb";

/**
 * MongoDB工具类，提供常用数据库操作
 */
class MongoUtils {
  /**
   * 获取数据库实例
   * @param dbName 数据库名称，默认使用配置中的数据库
   * @returns 数据库实例
   */
  static async getDb(dbName: string = "questionnaire_mongo_db"): Promise<Db> {
    const client = await clientPromise;
    return client.db(dbName);
  }

  /**
   * 获取集合
   * @param collectionName 集合名称
   * @param dbName 数据库名称，可选
   * @returns 集合实例
   */
  static async getCollection<T extends Document>(
    collectionName: string,
    dbName?: string
  ): Promise<Collection<T>> {
    const db = await this.getDb(dbName);
    return db.collection<T>(collectionName);
  }

  /**
   * 查找单个文档
   * @param collectionName 集合名称
   * @param filter 查询过滤条件
   * @param dbName 数据库名称，可选
   * @returns 查询结果文档
   */
  static async findOne<T extends Document>(
    collectionName: string,
    filter: Filter<T>,
    dbName?: string
  ): Promise<WithId<T> | null> {
    const collection = await this.getCollection<T>(collectionName, dbName);
    return collection.findOne(filter);
  }

  /**
   * 根据ID查找文档
   * @param collectionName 集合名称
   * @param id 文档ID
   * @param dbName 数据库名称，可选
   * @returns 查询结果文档
   */
  static async findById<T extends Document>(
    collectionName: string,
    id: string,
    dbName?: string
  ): Promise<WithId<T> | null> {
    return this.findOne<T>(collectionName, { _id: new ObjectId(id) } as Filter<T>, dbName);
  }

  /**
   * 查找多个文档
   * @param collectionName 集合名称
   * @param filter 查询过滤条件
   * @param options 查询选项
   * @param dbName 数据库名称，可选
   * @returns 查询结果文档数组
   */
  static async find<T extends Document>(
    collectionName: string,
    filter: Filter<T> = {} as Filter<T>,
    options?: FindOptions<T>,
    dbName?: string
  ): Promise<WithId<T>[]> {
    const collection = await this.getCollection<T>(collectionName, dbName);
    return collection.find(filter, options).toArray();
  }

  /**
   * 插入单个文档
   * @param collectionName 集合名称
   * @param doc 要插入的文档
   * @param dbName 数据库名称，可选
   * @returns 插入结果
   */
  static async insertOne<T extends Document>(
    collectionName: string,
    doc: OptionalUnlessRequiredId<T>,
    dbName?: string
  ): Promise<string> {
    const collection = await this.getCollection<T>(collectionName, dbName);
    const result = await collection.insertOne(doc);
    return result.insertedId.toString();
  }

  /**
   * 更新单个文档
   * @param collectionName 集合名称
   * @param filter 查询过滤条件
   * @param update 更新内容
   * @param dbName 数据库名称，可选
   * @returns 是否成功更新
   */
  static async updateOne<T extends Document>(
    collectionName: string,
    filter: Filter<T>,
    update: Partial<T>,
    dbName?: string
  ): Promise<boolean> {
    const collection = await this.getCollection<T>(collectionName, dbName);
    const result = await collection.updateOne(filter, { $set: update });
    return result.modifiedCount > 0;
  }

  /**
   * 删除单个文档
   * @param collectionName 集合名称
   * @param filter 查询过滤条件
   * @param dbName 数据库名称，可选
   * @returns 是否成功删除
   */
  static async deleteOne<T extends Document>(
    collectionName: string,
    filter: Filter<T>,
    dbName?: string
  ): Promise<boolean> {
    const collection = await this.getCollection<T>(collectionName, dbName);
    const result = await collection.deleteOne(filter);
    return result.deletedCount > 0;
  }
}

export default MongoUtils;
