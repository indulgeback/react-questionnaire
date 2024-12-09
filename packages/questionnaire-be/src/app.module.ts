// 第三方模块
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { ScheduleModule } from '@nestjs/schedule';

// 自定义模块
import { AuthModule } from '@/service/auth/auth.module';
import { MailModule } from '@/service/mail/mail.module';
import { QuestionModule } from '@/service/question/question.module';
import { FileModule } from '@/service/file/file.module';
import { AiModule } from '@/service/ai/ai.module';
import { TasksModule } from '@/tasks/tasks.module';

// 实体类
import User from '@/entities/user.entity';
import Question from '@/entities/question.entity';
import UserFavorite from '@/entities/user-favorite.entity';

// 自定义配置
import configuration from '@/config';
import { DbLogger } from '@/common/utils/log4js';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpRequestInterceptor } from '@/middleware/request.interceptor';
import { HttpResponseInterceptor } from '@/middleware/response.interceptor';
import { JwtAuthGuard } from '@/guard/jwt-auth.guard';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DefaultResponseMiddleware } from '@/middleware/default-response.middleware';

import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [configuration],
    }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => config.get('db.mongo'),
    // }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          ...config.get('db.mysql'),
          logger: new DbLogger(),
          entities: [User, Question, UserFavorite],
        };
      },
    }),
    MailerModule.forRoot({
      transport: {
        host: configuration().mailer.host,
        secure: true, // true for 465, false for other ports
        auth: {
          user: configuration().mailer.user, // generated ethereal user
          pass: configuration().mailer.pass, // generated ethereal password
        },
        debug: true, // 输出调试信息
        logger: true, // 启用日志记录
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'), // 静态文件路径
      serveRoot: '/files/', // 路径前缀
    }),
    ScheduleModule.forRoot(),
    AuthModule,
    MailModule,
    QuestionModule,
    FileModule,
    AiModule,
    TasksModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpRequestInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpResponseInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(DefaultResponseMiddleware).forRoutes('*');
  }
}
