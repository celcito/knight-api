import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import {Knigt} from './knigt/knigt'


@Injectable()
export class KnigtsService {
  constructor(
  @InjectModel(Knigt.name) private knigtModel: Model<Knigt>
 ) {}
 
  async searchAll(): Promise<Knigt[]> {
    return this.knigtModel.find().exec();
  }

  async create(knigt: Knigt): Promise<Knigt> {
    const knigtCreated = new this.knigtModel(knigt);
    return knigtCreated.save();
  }

  async searchById(id: string): Promise<Knigt> {
    return this.knigtModel.findById(id).exec();
  }

  async updateKnigts(id: string, knigt: Knigt): Promise<Knigt> {
    return this.knigtModel.findByIdAndUpdate(id, knigt,{ "new": true}).exec();
  }

  async deleteKnigt(id: string) {
    const knigtRemoved = this.knigtModel.findOneAndDelete({ _id: id }).exec();
    return await knigtRemoved;
  } 
}
