import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { AnyExceptionFilter } from "./filters/any-exception.filter";
import { HttpExceptionFilter } from "./filters/http-exception.filter";
import { ValidationPipe } from "@nestjs/common";
import { BlackCatsServicePipe } from "./pipes/black-cats-service.pipe";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const options = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .addTag('exceptions')
        .build();

    const app = await NestFactory.create(ApplicationModule);
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/help', app, document);
    app.useGlobalFilters(
        new HttpExceptionFilter(),
        new AnyExceptionFilter());
    app.useGlobalPipes(new ValidationPipe(), new BlackCatsServicePipe());
    await app.listen(3000);
}

bootstrap();
