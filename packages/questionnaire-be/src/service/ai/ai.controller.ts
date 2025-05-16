import { Controller, Sse, Query, Get } from '@nestjs/common';
import { AiService } from '@/service/ai/ai.service';
import { Public } from '@/common/decorators/public.decorator';
import { Observable } from 'rxjs';
import { ResponseBody } from '@/common/classes/response-body';

@Public()
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Sse('generate')
  generate(
    @Query('theme') theme: string,
    @Query('count') count: number,
    @Query('model') model: string,
  ): Promise<Observable<MessageEvent>> {
    return this.aiService.generate(theme, count || 10, model);
  }

  @Sse('analysis')
  analysis(
    @Query('questionnaire_id') questionnaire_id: number,
    @Query('model') model: string,
  ): Promise<Observable<MessageEvent>> {
    return this.aiService.analysis(questionnaire_id, model);
  }

  @Get('models')
  getAvailableModels(): ResponseBody<any> {
    const models = this.aiService.getAvailableModels();
    return new ResponseBody(1, models, '获取模型列表成功');
  }
}
