import { Module } from '@nestjs/common';
import { ExceptionsController } from "./exceptions.controller";

@Module({
  imports: [],
  controllers: [ExceptionsController],
  components: [],
})
export class ExceptionsModule {}
