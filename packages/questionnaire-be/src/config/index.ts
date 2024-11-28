import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import * as Moment from 'moment';
import { join } from 'path';

const configFileNameObj = {
  development: 'dev',
  production: 'prod',
  docker: 'docker',
};

const env = process.env.NODE_ENV || 'development';

console.log(
  '😈当 前 版 本 构 建 于😈' + Moment().format('YYYY-MM-DD HH:mm:ss'),
);

const config = load(
  readFileSync(join(__dirname, `../config/${configFileNameObj[env]}.yml`)),
);

if (env === configFileNameObj.docker) {
  config.db.mysql.host = process.env.MYSQL_HOST;
  config.db.redis.uri = `redis://${process.env.REDIS_HOST}:6379`;
}

export default () => {
  return config;
};
