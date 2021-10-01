import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // Just enter dates in DOTS
      whitelist: true,
      // respond bad request if you want send a otro: "maligno"
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
