import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';
import { AiService } from './ai.service';
import { AnswerModule } from '@/service/answer/answer.module';
import { EditorModule } from '@/service/editor/editor.module';

@Module({
  controllers: [AiController],
  providers: [AiService],
  imports: [AnswerModule, EditorModule],
})
export class AiModule {}
