import { Module } from '@nestjs/common';
import { AppModule } from './app/module';
import { PandaModule } from './panda/module';
import { WorkModule } from './work/module';

@Module({
  imports: [AppModule, PandaModule, WorkModule],
  controllers: [],
  providers: [],
})
export class MainModule {}
