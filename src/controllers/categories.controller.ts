import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  // If you want route static, you have what define before to route dinamic
  @Get(':categoryId')
  getCategory(@Param('categoryId') categoryId: string) {
    return `Your category is ${categoryId}`;
  }

  @Get(':categoryId/products/:productId')
  getCategoryAndProduct(@Param() { categoryId, productId }) {
    return `This is category ${categoryId} with product ${productId}`;
  }
}
