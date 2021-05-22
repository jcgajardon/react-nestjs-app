import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';

import { New } from './interfaces/news.interface';

@Injectable()
export class NewsService {
  constructor(@InjectModel('New') readonly newModel: Model<New>) {}

  private readonly logger = new Logger(NewsService.name);

  async findAll(): Promise<New[]> {
    const news = await this.newModel.find().sort({ created_at: 'desc' });
    return news;
  }

  async delete(newID: string): Promise<New> {
    const deleteNew = await this.newModel.findByIdAndDelete(newID);
    return deleteNew;
  }

  @Cron(CronExpression.EVERY_HOUR)
  async getAndInsertNewsFromApi(): Promise<void> {
    this.logger.debug('Corriendo cron de actualizacion de base datos');
    try {
      let newsForInsert = [];

      const newsDb = await this.newModel.find();

      const response = await axios.get(
        `${process.env.API_NEWSNODE_URL}/api/v1/search_by_date?query=nodejs`,
      );

      const {
        data: { hits },
      } = response;

      if (newsDb.length === 0) {
        newsForInsert = hits;
        this.logger.debug('Bd ingresada completamente');
      } else {
        hits.forEach((hit) => {
          const found = newsDb.find((e) => e.objectID === hit.objectID);

          if (!found) {
            this.logger.debug('Se ha ingresado 1 registro nuevo');
            newsForInsert.push(hit);
          }
        });
      }

      await this.newModel.insertMany(newsForInsert);
      this.logger.debug('Se han insertado los datos correctamente');
    } catch (error) {
      this.logger.error('Ha ocurrido un error al actualizar los datos');
    }
  }
}
