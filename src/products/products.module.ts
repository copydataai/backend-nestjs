import { Module } from '@nestjs/common';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';
import { BrandService } from './services/brand.service';
import { ProductsController } from './controllers/products.controller';
import { BrandController } from './controllers/brand.controller';
import { CategoriesController } from './controllers/categories.controller';

@Module({
  controllers: [ProductsController, BrandController, CategoriesController],
  providers: [CategoriesService, BrandService, ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
