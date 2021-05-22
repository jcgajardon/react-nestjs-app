import { Res } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

describe('NewsController', () => {
  let controller: NewsController;
  let service: NewsService;

  const response = {
    status: (code: number) => response,
  };

  const mockNewsService = {
    findAll: jest.fn(),
    deleteNew: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsController],
      providers: [NewsService],
    })
      .overrideProvider(NewsService)
      .useValue(mockNewsService)
      .compile();

    service = module.get<NewsService>(NewsService);
    controller = module.get<NewsController>(NewsController);
  });

  describe('News', () => {
    it('should return an array of news', async () => {
      const result = [];
      jest.spyOn(service, 'findAll').mockImplementation(async () => result);
      expect(await service.findAll()).toBe(result);
    });
  });
});
