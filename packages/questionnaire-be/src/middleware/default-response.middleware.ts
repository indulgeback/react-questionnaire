import { NestMiddleware, Injectable, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class DefaultResponseMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const originalJson = res.json;

    res.json = function (body) {
      if (!res.headersSent) {
        res.status(200);
      }
      return originalJson.call(this, body); // 确保返回 Response 对象
    };

    next();
  }
}
