import { Test, TestingModule } from '@nestjs/testing';
import { EditorService } from './editor.service';

describe('EditorService', () => {
  let service: EditorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditorService],
    }).compile();

    service = module.get<EditorService>(EditorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
