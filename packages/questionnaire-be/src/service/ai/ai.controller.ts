import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from '@/service/ai/ai.service';
import { Public } from '@/common/decorators/public.decorator';
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Public()
  @Post('generate')
  generate(@Body() body: any) {
    return this.aiService.generate(body);
  }
}
