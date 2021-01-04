import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerOptions = new DocumentBuilder()
        .setTitle('web-platform api')
        .setVersion('1.0')
        .addTag('gateway')
        .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  const port: number = app.get('ConfigService').get('PORT');
  SwaggerModule.setup('doc-api', app, document)
  await app.listen(port, () => {
    console.log(`gateway start ok ....port:${port}`);
  });
}
bootstrap();
