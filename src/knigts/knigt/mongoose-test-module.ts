import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { disconnect } from 'mongoose';

export const rootMongooseTestModule = (options: MongooseModuleOptions = {}) =>
  MongooseModule.forRoot('mongodb://127.0.0.1:27017/knigts', {
    ...options,
  });


export const closeMongoConnection = async () => {
  await disconnect();
};