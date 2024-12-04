import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';

const configFileNameObj = {
  development: 'dev',
  production: 'prod',
  docker: 'docker',
};

const env = process.env.NODE_ENV || 'development';

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
