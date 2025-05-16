import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionService } from '@/service/question/question.service';
import { QuestionController } from '@/service/question/question.controller';
import Question from '@/service/question/entities/question.entity';
import UserFavorite from '@/service/question/entities/user-favorite.entity';
import User from '@/service/auth/entities/user.entity';
import {
  QuestionnaireDetail,
  QuestionnaireDetailSchema,
} from '@/common/schemas/question-detail.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([Question, UserFavorite, User]),
    MongooseModule.forFeature([
      { name: QuestionnaireDetail.name, schema: QuestionnaireDetailSchema },
    ]),
  ],
  controllers: [QuestionController],
  providers: [QuestionService],
  exports: [QuestionService],
})
export class QuestionModule {}
