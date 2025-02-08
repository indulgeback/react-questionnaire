import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionService } from '@/service/question/question.service';
import { QuestionController } from '@/service/question/question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Question from '@/common/entities/question.entity';
import UserFavorite from '@/common/entities/user-favorite.entity';
import User from '@/common/entities/user.entity';
import { Schema } from 'mongoose';

const QuestionSchema = new Schema({
  title: String,
  createdAt: Date,
});

@Module({
  imports: [
    TypeOrmModule.forFeature([Question, UserFavorite, User]),
    MongooseModule.forFeature([{ name: 'Question', schema: QuestionSchema }]),
  ],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
