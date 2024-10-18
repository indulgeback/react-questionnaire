import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { rateLimit } from 'express-rate-limit';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const config = app.get(ConfigService);

  app.setGlobalPrefix(config.get<string>('app.prefix'));

  // 设置访问频率 防御DDos攻击
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15分钟
      max: 1000, // 限制15分钟内最多只能访问1000次
    }),
  );
  await app.listen(config.get<number>('app.port'));
}
bootstrap();
