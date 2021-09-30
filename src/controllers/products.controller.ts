import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.findAll();
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return this.productsService.findOne(productId);
  }

  @Post()
  createProduct(@Body() payload: any) {
    const value = this.productsService.createOne(payload);
    if (!value) {
      return {
        message: "Don't can create this product",
        error: true,
      };
    }
    return {
      message: 'Action create',
      payload: value,
    };
  }

  @Patch(':productId')
  updateProduct(
    @Param('productId') productId: string,
    @Body('payload') payload: any,
  ) {
    const valueId = this.productsService.findOne(productId);
    if (!valueId) {
      return {
        error: true,
        message: "Don't exists this product for update",
      };
    }
    const value = this.productsService.updateOne(productId, payload);
    return {
      message: 'Product is update',
      payload: value,
    };
  }

  @Delete(':productId')
  deleteProduct(@Param('productId') productId: string) {
    const valueId = this.productsService.findOne(productId);
    if (!valueId) {
      // return {
      //   error: true,
      //   message: 'Product not exists',
      // };
      throw new NotFoundException('Product not exists');
    }
    return this.productsService.deleteOne(productId);
  }
}
