import { Controller, Get } from '@nestjs/common';
import { AppService } from './service';

@Controller('/work')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('towork')
  toWork(): string {
    return this.appService.work();
  }
}
