import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(cfgService: ConfigService) {
    const micros = cfgService.get<{[key: string]: any}>('MICROSERVICES');
    console.log(micros, typeof micros)
  }
  
}
