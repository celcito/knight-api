import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


interface Weapon {
  name: string;
  mod: number;
  attr: string;
  equipped: boolean;
}

interface KnigtAttibutes {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}


@Schema()
export class Knigt extends Document {

@Prop()

name:string;

@Prop()

nickname:string;

@Prop()

birthday:Date;

 @Prop({ type: [{ type: Object }] })

weapons:Weapon[]

@Prop({ type: Object })

attributes:KnigtAttibutes;

@Prop()

keyAttribute:string;

}


export const KnigtSchema = SchemaFactory.createForClass(Knigt);