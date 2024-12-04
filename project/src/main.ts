import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.useGlobalPipes(new ValidationPipe()); // * 등록
//   app.useGlobalFilters(new HttpExceptionFilter());
//   const PORT = process.env.PORT;
//   await app.listen(PORT);
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0.0')
    .build();
  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.enableCors({
    origin: true,
    credentials: true,
  });
  const PORT = process.env.PORT;
  await app.listen(PORT);
}

bootstrap();
