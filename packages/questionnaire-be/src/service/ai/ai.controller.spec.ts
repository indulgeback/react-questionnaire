import { Test, TestingModule } from '@nestjs/testing';
import { AiController } from '@/service/ai/ai.controller';
import { AiService } from '@/service/ai/ai.service';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

describe('AiController', () => {
  let aiController: AiController;
  let aiService: AiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AiController],
      providers: [
        {
          provide: AiService,
          useValue: {
            generate: jest.fn().mockReturnValue(of({ data: 'test' })),
          },
        },
      ],
    }).compile();

    aiController = module.get<AiController>(AiController);
    aiService = module.get<AiService>(AiService);
  });

  it('should be defined', () => {
    expect(aiController).toBeDefined();
  });

  it('should call aiService.generate with the correct theme', async () => {
    const theme = 'test-theme';
    await aiController.generate(theme);
    expect(aiService.generate).toHaveBeenCalledWith(theme);
  });

  it('should return an Observable', async () => {
    const theme = 'test-theme';
    const result = await aiController.generate(theme);
    expect(result).toBeInstanceOf(Observable);
  });
});
