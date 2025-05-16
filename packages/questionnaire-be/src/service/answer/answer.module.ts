import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  QuestionnaireAnswer,
  QuestionnaireAnswerSchema,
} from '@/common/schemas/answer.schema';
import { EditorModule } from '../editor/editor.module';

@Module({
  controllers: [AnswerController],
  providers: [AnswerService],
  exports: [AnswerService],
  imports: [
    MongooseModule.forFeature([
      { name: QuestionnaireAnswer.name, schema: QuestionnaireAnswerSchema },
    ]),
    EditorModule,
  ],
})
export class AnswerModule {}
