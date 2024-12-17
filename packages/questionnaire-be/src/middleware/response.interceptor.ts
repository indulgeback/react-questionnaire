import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpLogger } from '@/common/utils/log4js';

@Injectable()
export class HttpResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    return next.handle().pipe(
      map((data) => {
        // 组装日志信息
        const logFormat = {
          httpType: 'Response',
          ip: req.headers?.remoteip
            ? String(req.headers.remoteip)
            : req.ip.split(':').pop(),
          reqUrl: `${req.headers.host}${req.originalUrl}`,
          reqMethod: req.method,
          params: req.params,
          query: req.query,
          body: req.body,
          responseStatus: res.statusCode,
          responseData: data,
        };

        // 如果 content-type:text/event-stream，则返回 data
        if (req.headers['content-type'] === 'text/event-stream') {
          return data;
        }

        // 根据状态码，进行日志类型区分
        if (res.statusCode >= 400) {
          HttpLogger.error(JSON.stringify(logFormat));
        } else {
          HttpLogger.access(JSON.stringify(logFormat));
        }

        return data;
      }),
    );
  }
}
