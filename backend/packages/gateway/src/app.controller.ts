import { All, Controller, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/gate')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @All('/:microName')
  getHello(@Param() microName: string) {
    console.log(microName);
    return microName;
  }
}
