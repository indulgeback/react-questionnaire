import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';

const configFileNameObj = {
  development: 'dev',
  docker: 'docker',
};

const env = process.env.NODE_ENV === 'docker' ? 'docker' : 'development';

const config = load(
  readFileSync(join(__dirname, `../config/${configFileNameObj[env]}.yml`)),
);

// 如果是docker环境，则使用docker容器传递的环境变量配置
if (env === configFileNameObj.docker) {
  config.db.mysql.host = process.env.MYSQL_HOST;
  config.db.redis.uri = `redis://${process.env.REDIS_HOST}:6379`;
  config.db.mongo.uri = `mongodb://${process.env.MONGO_HOST}:27017/questionnaire_mongo_db?authSource=admin`;
}

export default () => {
  return config;
};
