import { Test, TestingModule } from '@nestjs/testing';
import { KnigtsController } from './knigts.controller';

describe('KnigtsController', () => {
  let controller: KnigtsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KnigtsController],
    }).compile();

    controller = module.get<KnigtsController>(KnigtsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
 

