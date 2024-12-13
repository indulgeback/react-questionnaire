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

  it('should generate expected result', async () => {
    const theme = '测试主题';
    const result = await service.generate(theme);

    await new Promise((resolve, reject) => {
      const subscription = result.subscribe({
        next: (event) => {
          try {
            const data = event.data;
            console.log('Received data:', data);

            // 判断是否有返回数据
            expect(data).toBeDefined();
            resolve(undefined);

            // 取消订阅以停止接收后续消息
            subscription.unsubscribe();
          } catch (error) {
            console.error('Error processing data:', error);
            reject(error);
          }
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  });
});
