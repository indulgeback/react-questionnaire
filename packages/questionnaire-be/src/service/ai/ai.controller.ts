import { Controller, Sse, Query } from '@nestjs/common';
import { AiService } from '@/service/ai/ai.service';
import { Public } from '@/common/decorators/public.decorator';
import { Observable } from 'rxjs';

@Public()
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Sse('generate')
  generate(
    @Query('theme') theme: string,
    @Query('count') count: number,
  ): Promise<Observable<MessageEvent>> {
    return this.aiService.generate(theme, count || 20);
  }

  @Sse('analysis')
  analysis(
    @Query('questionnaire_id') questionnaire_id: number,
  ): Promise<Observable<MessageEvent>> {
    return this.aiService.analysis(questionnaire_id);
  }
}
