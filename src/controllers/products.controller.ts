import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFilter() {
    return `I am a filter`;
  }

  @Get(':id')
  getProduct(@Param() params: any) {
    return `product ${params.id}`;
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
