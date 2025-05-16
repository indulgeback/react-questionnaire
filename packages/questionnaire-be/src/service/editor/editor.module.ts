import { Module } from '@nestjs/common';
import { EditorController } from './editor.controller';
import { EditorService } from './editor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionnaireDetailSchema } from '@/common/schemas/question-detail.schema';

@Module({
  controllers: [EditorController],
  providers: [EditorService],
  imports: [
    MongooseModule.forFeature([
      { name: 'QuestionnaireDetail', schema: QuestionnaireDetailSchema },
    ]),
  ],
  exports: [EditorService],
})
export class EditorModule {}
