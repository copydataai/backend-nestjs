import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { OrdersController } from './controllers/orders.controller';
import { UsersController } from './controllers/users.controller';
import { CustomerController } from './controllers/customer.controller';
import { BrandController } from './controllers/brand.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, OrdersController, UsersController, CustomerController, BrandController],
  providers: [AppService],
})
export class AppModule {}
