
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Knigt } from  './knigt/knigt' ;

import { KnigtsService } from '../knigts/knigts.service';

@Controller('knigts')
export class KnigtsController {
  constructor(
    private readonly knigtsService: KnigtsService
  ) {}

  @Get()
  async searchAll(): Promise<Knigt[]> {
    return this.knigtsService.searchAll();
  }

  @Post()
  async create(@Body() knigt: Knigt): Promise<Knigt> {
    return this.knigtsService.create(knigt);
  }

  @Get(':id')
  async searchById(@Param('id') id: string): Promise<Knigt> {
    return this.knigtsService.searchById(id);
  }

  @Put(':id')
  async updateKnigt(@Param('id') id: string, @Body() knigtAtualizado: Knigt): Promise<Knigt> {
    return this.knigtsService.updateKnigts(id, knigtAtualizado);
  }

  @Delete(':id')
  async deleteKnigt(@Param('id') id: string): Promise<Knigt> {
    return this.knigtsService.deleteKnigt(id);
  }
 
}
