import { MiddlewaresConsumer, Module, NestModule } from '@nestjs/common';
import { CatsModule } from "./cats/cats.module";
import { CatsController } from "./cats/cats.controller";
import { LoggerMiddleware } from "./middlewares/logger.middleware";

@Module({
    imports: [CatsModule]
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer
        .apply(LoggerMiddleware)
        .with('CatsModule')
        .forRoutes(CatsController);
}
}