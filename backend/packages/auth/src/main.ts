import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    port: 8082,
    host: '127.0.0.1'
  });
  await app.listen(() => {
    console.log('auth microservice start ok...');
  });
}
bootstrap();
