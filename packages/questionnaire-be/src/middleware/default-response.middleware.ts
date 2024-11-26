import { NestMiddleware, Injectable, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class DefaultResponseMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const originalJson = res.json;

    res.json = function (body) {
      // 检查当前状态码是否在2xx范围内或未设置状态码
      if (
        (!res.headersSent && !res.statusCode) ||
        (res.statusCode >= 200 && res.statusCode < 300)
      ) {
        res.status(200);
      }
      return originalJson.call(this, body); // 确保返回 Response 对象
    };

    next();
  }
}
