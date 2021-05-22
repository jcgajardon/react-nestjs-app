import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { NewsService } from './news/news.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    NewsModule,
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_MONGO_URL, { useNewUrlParser: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private newsService: NewsService) {
    this.init();
  }

  init() {
    this.newsService.getAndInsertNewsFromApi();
  }
}
