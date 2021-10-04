import { Module } from '@nestjs/common';
import { HttpModule, HttpService} from '@nestjs/axios'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

const API_KEY = '1236536512';
const API_KEY_PROD = 'PROD_KEY_ULTRA'

@Module({
  imports: [HttpModule, UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [ {
    provide: AppService,
    useClass: AppService,
  },
  {
    provide: 'API_KEY',
    useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
  },
  {
    provide: 'TASKS',
    useFactory: async (http: HttpService) => {
      const tasks = await http.get('https://jsonplaceholder.typicode.com/todos').toPromise();
      return tasks.data;
    },
    inject: [HttpService]
  }],
})
export class AppModule {}
