import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { AnyExceptionFilter } from "./filters/any-exception.filter";
import { HttpExceptionFilter } from "./filters/http-exception.filter";
import { ValidationPipe } from "@nestjs/common";
import { BlackCatsServicePipe } from "./pipes/black-cats-service.pipe";

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    app.useGlobalFilters(
        new HttpExceptionFilter(),
        new AnyExceptionFilter());
    app.useGlobalPipes(new ValidationPipe(), new BlackCatsServicePipe());
    await app.listen(3000);
}

bootstrap();
