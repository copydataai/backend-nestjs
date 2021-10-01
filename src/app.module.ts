import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { OrdersController } from './controllers/orders.controller';
import { UsersController } from './controllers/users.controller';
import { CustomerController } from './controllers/customer.controller';
import { BrandController } from './controllers/brand.controller';
import { ProductsService } from './services/products.service';
import { BrandService } from './services/brand.service';
import { CategoriesService } from './services/categories.service';
import { CustomersService } from './services/customers.service';
import { UsersService } from './services/users.service';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, OrdersController, UsersController, CustomerController, BrandController],
  providers: [AppService, ProductsService, BrandService, CategoriesService, CustomersService, UsersService],
})
export class AppModule {}
