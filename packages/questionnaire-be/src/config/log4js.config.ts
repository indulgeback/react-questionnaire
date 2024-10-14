import * as path from 'path';

export default {
  appenders: {
    console: { type: 'console' },
    file: {
      type: 'file',
      filename: path.join(__dirname, '../logs/app.log'),
      maxLogSize: 10485760, // 10MB
      backups: 3,
      compress: true,
    },
  },
  categories: {
    default: { appenders: ['console', 'file'], level: 'debug' },
  },
};
