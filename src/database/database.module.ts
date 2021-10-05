import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongoClient } from 'mongodb';
import config from '../config';

const API_KEY = '1236536512';
const API_KEY_PROD = 'PROD_KEY_ULTRA';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, port, name, host, user, password } =
          configService.mongo;
        const uri = `${connection}://${user}:${password}@${host}:${port}/`;
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db('store');
        return database;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'MONGO'],
})
export class DatabaseModule {}
