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
  readFileSync(join(__dirname, `./${configFileNameObj[env]}.yml`), 'utf8'),
) as Record<string, any>;

console.error('config: ', config);
console.error('env: ', env);

if (env === configFileNameObj.docker) {
  config.db.mysql.host = process.env.DB_HOST;
  config.db.mysql.port = process.env.DB_PORT;
  config.db.redis.host = process.env.REDIS_HOST;
  config.db.redis.port = process.env.REDIS_PORT;
}

export default () => {
  return config;
};
