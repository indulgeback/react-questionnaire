import { Module } from '@nestjs/common';
import { QuestionService } from '@/service/question/question.service';
import { QuestionController } from '@/service/question/question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Question from '@/common/entities/question.entity';
import UserFavorite from '@/common/entities/user-favorite.entity';
import User from '@/common/entities/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Question, UserFavorite, User])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
