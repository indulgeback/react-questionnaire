import { Module } from '@nestjs/common';
import { QuestionService } from '@/service/question/question.service';
import { QuestionController } from '@/service/question/question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Question from '@/entities/question.entity';
import UserFavorite from '@/entities/user-favorite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, UserFavorite])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
