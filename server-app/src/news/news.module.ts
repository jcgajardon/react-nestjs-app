import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NewSchema } from './schemas/news.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'New',
        schema: NewSchema,
      },
    ]),
  ],
  controllers: [NewsController],
  providers: [NewsService],
  exports: [NewsService],
})
export class NewsModule {}
