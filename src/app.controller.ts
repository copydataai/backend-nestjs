import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello NESTJS!';
  }

  //Declare new route with /nuevo
  @Get('nuevo')
  newEndpoint() {
    return 'I am new';
  }

  @Get('/route/')
  otherNew() {
    return 'with /sas/';
  }

  // If you want route static, you have what define before to route dinamic
  @Get('products/filter')
  getProductFilter() {
    return `I am a filter`;
  }

  @Get('products/:id')
  getProduct(@Param() params: any) {
    return `product ${params.id}`;
  }

  @Get('categories/:categoryId')
  getCategory(@Param('categoryId') categoryId: string) {
    return `Your category is ${categoryId}`;
  }

  @Get('categories/:categoryId/products/:productId')
  getCategoryAndProduct(@Param() { categoryId, productId }) {
    return `This is category ${categoryId} with product ${productId}`;
  }

  @Get('products')
  getSpecificProduct(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    //const { limit, offset } = params;
    return `products: limite => ${limit} offset=> ${offset} brand=> ${brand}`;
  }
}
