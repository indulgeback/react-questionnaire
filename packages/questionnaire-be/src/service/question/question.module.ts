import { Module } from '@nestjs/common';
import { QuestionService } from '@/service/question/question.service';
import { QuestionController } from '@/service/question/question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '@/service/question/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
