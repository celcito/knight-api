
import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Knigt, KnigtSchema, KnigtAttributes, Weapon } from './knigt';
import {KnigtsService} from '../knigts.service'
//import { MongooseModule } from '@nestjs/mongoose';
//import { closeMongoConnection, rootMongooseTestModule } from './mongoose-test-module'
import { Model } from 'mongoose';

describe('Knigt Schema', () => {
  let knigtModel: Model<Knigt>;
  let service: KnigtsService;

  const sampleKnigt: Partial<Knigt> = {
    name: 'Sir Lancelot',
    nickname: 'Lance',
    birthday: new Date('1985-07-15'),
    weapons: [
      { name: 'Excalibur', mod: 5, attr: 'Holy', equipped: true },
      { name: 'Lance of Virtue', mod: 3, attr: 'Justice', equipped: false },
    ],
    attributes: {
      strength: 10,
      dexterity: 8,
      constitution: 12,
      intelligence: 14,
      wisdom: 13,
      charisma: 16,
    },
    keyAttribute: 'charisma',
  };

/*   beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Knigt', schema: KnigtSchema }]),
      ],
      providers: [KnigtsService],
    }).compile();

    service = module.get<KnigtsService>(KnigtsService);
  },3000); 
 */



  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken(Knigt.name),
          useValue: {
            create: jest.fn().mockResolvedValue(sampleKnigt),
          },
        },
      ],
    }).compile();

    knigtModel = module.get<Model<Knigt>>(getModelToken(Knigt.name));
  });

  it('should save a Knigt', async () => {
    const createSpy = jest.spyOn(knigtModel, 'create');
    const createdKnigt = await knigtModel.create(sampleKnigt);
    expect(createSpy).toHaveBeenCalledWith(sampleKnigt);
    expect(createdKnigt).toEqual(sampleKnigt);
  });
/*
   afterAll(async () => {
    await closeMongoConnection();
  }); */


});