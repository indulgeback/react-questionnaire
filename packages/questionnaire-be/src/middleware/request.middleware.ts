/**
 * 自定义请求信息日志记录中间件
 */
import { NextFunction, Request, Response } from 'express';
import { HttpLogger } from '@/common/utils/log4js';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class HttpRequestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    next();

    // 组装日志信息
    const logFormat = {
      httpType: 'Request',
      ip: req.headers?.remoteip
        ? String(req.headers.remoteip)
        : req.ip.split(':').pop(),
      reqUrl: `${req.headers.host}${req.originalUrl}`,
      reqMethod: req.method,
      httpCode: res.statusCode,
      params: req.params,
      query: req.query,
      body: req.body,
    };

    // 根据状态码，进行日志类型区分
    if (res.statusCode >= 400) {
      HttpLogger.error(JSON.stringify(logFormat));
    } else {
      HttpLogger.access(JSON.stringify(logFormat));
    }
  }
}
