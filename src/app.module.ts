import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnightsModule } from './knights/knights.module';

@Module({
  imports: [KnightsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
