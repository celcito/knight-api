import { Test, TestingModule } from '@nestjs/testing';
import { KnigtsService } from './knigts.service';

describe('KnigtsService', () => {
  let service: KnigtsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KnigtsService],
    }).compile();

    service = module.get<KnigtsService>(KnigtsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
