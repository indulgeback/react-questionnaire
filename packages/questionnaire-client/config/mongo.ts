import { MongoClient, MongoClientOptions } from "mongodb";

let uri: string = "";

if (process.env.NODE_ENV === "production") {
  uri = process.env.MONGO_HOST as string;
} else {
  // 使用与后端一致的MongoDB连接字符串
  uri =
    process.env.MONGODB_URI ||
    "mongodb://admin:12345678@localhost:27017/questionnaire_mongo_db?authSource=admin";
}

const options: MongoClientOptions = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// 在全局命名空间中添加 _mongoClientPromise 属性
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  // 在开发模式下重用连接
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // 在生产模式下创建新的连接
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
