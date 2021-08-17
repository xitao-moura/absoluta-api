import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from "fs";

//process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });
  app.enableCors();

  const config = new DocumentBuilder()
    .addBasicAuth()
    .setTitle('Absoluta Api')
    .setDescription('Absoluta api descrição')
    .setVersion('1.0')
    .addTag('absoluta')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
//teste gpg////