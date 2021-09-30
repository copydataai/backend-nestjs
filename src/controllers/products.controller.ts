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
import { ParseIntPipe } from '../common/parse-int.pipe';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.findAll();
  }

  @Get(':productId')
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
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
    @Param('productId', ParseIntPipe) productId: number,
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
  deleteProduct(@Param('productId', ParseIntPipe) productId: number) {
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
