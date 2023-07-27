import { Module } from '@nestjs/common';
import { KnigtsService } from './knigts.service';
import { KnigtsController } from './knigts.controller';

@Module({
  providers: [KnigtsService],
  controllers: [KnigtsController]
})
export class KnigtsModule {}
