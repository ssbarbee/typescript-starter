import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { catsRepository } from './cats.providers';

@Module({
  imports: [],
  controllers: [CatsController],
  components: [CatsService, ...catsRepository],
})
export class CatsModule {}
