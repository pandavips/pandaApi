import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  work(): string {
    return '我热爱工作~';
  }
}
