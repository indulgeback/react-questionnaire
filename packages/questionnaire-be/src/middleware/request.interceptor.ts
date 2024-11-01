import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { HttpLogger } from '@/common/utils/log4js';

@Injectable()
export class HttpRequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();

    // 组装日志信息
    const logFormat = {
      httpType: 'Request',
      ip: req.headers?.remoteip
        ? String(req.headers.remoteip)
        : req.ip.split(':').pop(),
      reqUrl: `${req.headers.host}${req.originalUrl}`,
      reqMethod: req.method,
      params: req.params,
      query: req.query,
      body: req.body,
    };

    // 记录请求日志
    HttpLogger.access(JSON.stringify(logFormat));

    return next.handle();
  }
}
