import {
  Controller,
  HttpStatus,
  Res,
  Query,
  NotFoundException,
  Delete,
} from '@nestjs/common';

import { NewsService } from './news.service';
import { Get } from '@nestjs/common';

@Controller('api')
export class NewsController {
  constructor(private newsService: NewsService) {}

  // Get News
  @Get('/news')
  async getNews(@Res() res) {
    const news = await this.newsService.findAll();
    return res.status(HttpStatus.OK).json(news);
  }

  // Delete New
  @Delete('/news')
  async deleteNew(@Res() res, @Query('newID') newID) {
    if (!newID) throw new NotFoundException('ID is required');

    const newDeleted = await this.newsService.delete(newID);

    if (!newDeleted) throw new NotFoundException('New does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'New Deleted Successfully',
      newDeleted,
    });
  }
}
