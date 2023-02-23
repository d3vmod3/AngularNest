import { Test, TestingModule } from '@nestjs/testing';
import { NbaPlayerService } from './nba-player.service';

describe('NbaPlayerService', () => {
  let service: NbaPlayerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NbaPlayerService],
    }).compile();

    service = module.get<NbaPlayerService>(NbaPlayerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
