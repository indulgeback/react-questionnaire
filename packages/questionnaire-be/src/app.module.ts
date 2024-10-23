// 第三方模块
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';

// 自定义模块
import { AuthModule } from '@/service/auth/auth.module';
import { MailModule } from '@/service/mail/mail.module';
import { QuestionModule } from '@/service/question/question.module';

// 自定义配置
import configuration from '@/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('db.mongo'),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('db.mysql'),
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.163.com',
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'XMquestionnaire@163.com', // generated ethereal user
          pass: 'HS35qYhKHX8UF5kE', // generated ethereal password
        },
        debug: true, // 输出调试信息
        logger: true, // 启用日志记录
      },
    }),
    AuthModule,
    MailModule,
    QuestionModule,
  ],
})
export class AppModule {}
