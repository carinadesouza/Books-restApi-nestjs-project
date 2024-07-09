import { Test, TestingModule } from '@nestjs/testing';
import { DaatabaseService } from './daatabase.service';

describe('DaatabaseService', () => {
  let service: DaatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaatabaseService],
    }).compile();

    service = module.get<DaatabaseService>(DaatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
