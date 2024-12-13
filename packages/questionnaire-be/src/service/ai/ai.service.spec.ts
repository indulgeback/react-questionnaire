import { Test, TestingModule } from '@nestjs/testing';
import { AiService } from './ai.service';
import { Observable } from 'rxjs';

describe('AiService', () => {
  let service: AiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiService],
    }).compile();

    service = module.get<AiService>(AiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate a questionnaire', async () => {
    const theme = '测试主题';
    const result = await service.generate(theme);

    expect(result).toBeInstanceOf(Observable);

    result.subscribe({
      next: (messageEvent) => {
        console.log('Received data:', messageEvent.data);
        expect(messageEvent.data).toContain('问卷');
      },
      error: (error) => {
        fail(`Expected no error, but got: ${error}`);
      },
      complete: () => {
        // Optionally check for completion
      },
    });
  });
});
