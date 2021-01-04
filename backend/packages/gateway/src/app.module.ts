import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: join(__dirname, `../configs/development.env`)
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
