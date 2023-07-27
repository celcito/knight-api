import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnigtsModule } from './knigts/knigts.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [KnigtsModule],
})
export class AppModule {}
