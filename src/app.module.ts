import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { KnigtsModule } from './knigts/knigts.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [KnigtsModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017',{ dbName: 'knigts' })],
})
export class AppModule {}
