import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import {Knigt} from './knigt/knigt'
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';


@Injectable()
export class KnigtsService {
  constructor(
  @InjectModel(Knigt.name) private knigtModel: Model<Knigt>
 ) {}
 
  async searchAll(): Promise<Knigt[]> {


    try {
      return this.knigtModel.find().exec();
    } catch (error) {
      return null;
    }

  }

  async create(knigt: Knigt): Promise<Knigt> {
    try {
    const knigtCreated = new this.knigtModel(knigt);
    return knigtCreated.save();

    } catch(error){
      throw new HttpException('Erro ao criar  Knigt', HttpStatus.BAD_REQUEST);
    }
  }


  async searchById(id: string): Promise<Knigt> {
      try {

        if (!id)      
        throw new NotFoundException('Cavaleiro não encontrado.');

       
        
        const knight = this.knigtModel.findById(id).exec() || null

        if (!knight) {
          throw new NotFoundException('Cavaleiro não encontrado.');
        }
        return await knight
      } catch (error) {
        throw new NotFoundException('Cavaleiro não encontrado.');
      }
  }

  async updateKnigts(id: string, knigt: Knigt): Promise<Knigt> {
    try {
      if (!id)      
      throw new NotFoundException('Cavaleiro não encontrado.');

    
      const knight =this.knigtModel.findByIdAndUpdate(id, knigt,{ "new": true}).exec();
      if (!knight) {
        throw new NotFoundException('Cavaleiro não encontrado.');
      }

      return await knight
    } catch (error) {
      throw new HttpException('Erro ao atualizar o knigt', HttpStatus.BAD_REQUEST);
    }
  }

  async deleteKnigt(id: string) {
    try {
      const knigtRemoved = this.knigtModel.findOneAndDelete({ _id: id }).exec();
      return await knigtRemoved;    
    } catch (error) {
      throw new HttpException('Erro ao deletar o knigt', HttpStatus.BAD_REQUEST);
    }
  } 
}
