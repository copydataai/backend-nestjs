import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

import { CategoriesService } from '../services/categories.service';
import {
  CreateCategoriesDto,
  UpdateCategoriesDto,
} from '../dtos/categories.dtos';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getCategories() {
    return this.categoriesService.findAll();
  }

  @Get(':name')
  getCategory(@Param('name') name: string) {
    return this.categoriesService.findOne(name);
  }

  @Post()
  createCategory(@Body() payload: CreateCategoriesDto) {
    return this.categoriesService.createOne(payload);
  }

  @Put(':name')
  updateCategory(
    @Param('name') name: string,
    @Body() payload: UpdateCategoriesDto,
  ) {
    return this.categoriesService.updateOne(name, payload);
  }

  @Delete(':name')
  deleteCategory(@Param('name') name: string) {
    return this.categoriesService.deleteOne(name);
  }
}
