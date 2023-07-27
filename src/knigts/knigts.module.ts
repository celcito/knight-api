import { Module } from '@nestjs/common';
import { KnigtsService } from './knigts.service';
import { KnigtsController } from './knigts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Knigt,KnigtSchema} from "./knigt/knigt"

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Knigt.name,
        schema: KnigtSchema
      }
    ])
  ],
  providers: [KnigtsService],
  controllers: [KnigtsController]
})
export class KnigtsModule {}
