import { Test, TestingModule } from '@nestjs/testing';
import { DttController } from './dtt.controller';

describe('DttController', () => {
  let controller: DttController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DttController],
    }).compile();

    controller = module.get<DttController>(DttController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
