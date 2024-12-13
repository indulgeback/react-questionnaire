import { Controller, Sse, Query } from '@nestjs/common';
import { AiService } from '@/service/ai/ai.service';
import { Public } from '@/common/decorators/public.decorator';
import { Observable } from 'rxjs';
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Public()
  @Sse('generate')
  generate(@Query('theme') theme: string): Promise<Observable<MessageEvent>> {
    return this.aiService.generate(theme);
  }
}
