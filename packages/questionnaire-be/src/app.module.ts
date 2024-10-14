import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { QuestionModule } from './service/question/question.module';
import { AuthModule } from './service/auth/auth.module';
import configuration from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ...config.get('db'),
        autoLoadEntities: true,
        keepConnectionAlive: true,
        // entities: [__dirname + '/**/*.entity{.ts,.js}'], // 实体文件路径
      }),
    }),
    AuthModule,
    QuestionModule,
  ],
})
export class AppModule {}
