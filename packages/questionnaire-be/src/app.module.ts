import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    QuestionModule,
    TypeOrmModule.forRoot({
      type: 'mysql', // 数据库类型
      host: 'localhost', // 数据库服务器地址
      port: 3306, // 数据库端口
      username: 'your_username', // 数据库用户名
      password: 'your_password', // 数据库密码
      database: 'your_database_name', // 数据库名称
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 实体文件路径
      synchronize: true, // 自动同步实体结构到数据库（生产环境建议关闭）
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
