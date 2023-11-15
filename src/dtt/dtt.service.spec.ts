import { Test, TestingModule } from '@nestjs/testing';
import { DttService } from './dtt.service';

describe('DttService', () => {
  let service: DttService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DttService],
    }).compile();

    service = module.get<DttService>(DttService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
