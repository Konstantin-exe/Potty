import { Test, TestingModule } from '@nestjs/testing';
import { PottiesService } from './potties.service';

describe('PottiesService', () => {
  let service: PottiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PottiesService],
    }).compile();

    service = module.get<PottiesService>(PottiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
