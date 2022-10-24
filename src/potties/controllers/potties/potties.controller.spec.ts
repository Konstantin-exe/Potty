import { Test, TestingModule } from '@nestjs/testing';
import { PottiesController } from './potties.controller';

describe('PottiesController', () => {
  let controller: PottiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PottiesController],
    }).compile();

    controller = module.get<PottiesController>(PottiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
