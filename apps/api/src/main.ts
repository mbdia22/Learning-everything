import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => new BadRequestException(errors),
    }),
  );

  const prismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 API ready at http://localhost:${port}/api/v1`);
}
bootstrap().catch((error) => {
  console.error('❌ Unable to start API', error);
  process.exit(1);
});
