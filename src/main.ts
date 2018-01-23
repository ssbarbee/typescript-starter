import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { AnyExceptionFilter } from "./filters/any-exception.filter";
import { HttpExceptionFilter } from "./filters/http-exception.filter";

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    app.useGlobalFilters(
        new HttpExceptionFilter(),
        new AnyExceptionFilter());
    await app.listen(3000);
}

bootstrap();
