import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export interface Weapon {
    name: string;
    mod: number;
    attr: string;
    equipped: boolean;
  }
  
  export interface KnigtAttributes {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  }

  
export type KnigtDocument = HydratedDocument<Knigt>;

@Schema()
export class Knigt {


@Prop()

name:string;

@Prop()

nickname:string;

@Prop()

birthday:Date;

 @Prop({ type: [{ type: Object }] })

weapons:Weapon[]

@Prop({ type: Object })

attributes:KnigtAttributes;

@Prop()

keyAttribute:string;

}

  



export const KnigtSchema = SchemaFactory.createForClass(Knigt);