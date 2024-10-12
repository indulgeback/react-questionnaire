import { Module } from '@nestjs/common';
import { QuestionModule } from './service/question/question.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './service/auth/auth.module';
import getConfig from './config';

const config = getConfig();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config.db,
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 实体文件路径
    }),
    AuthModule,
    QuestionModule,
  ],
})
export class AppModule {}
