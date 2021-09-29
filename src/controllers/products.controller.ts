import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';

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

  @Get()
  getSpecificProduct(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    //const { limit, offset } = params;
    return {
      payload: {
        limit,
        offset,
        brand,
      },
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Action create',
      payload,
    };
  }
}
