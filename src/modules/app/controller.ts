import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello2')
  getHello2(@Query() query): string {
    console.log(query);
    return this.appService.getHello();
  }
}
