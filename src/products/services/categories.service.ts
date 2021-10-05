import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateCategoriesDto,
  UpdateCategoriesDto,
} from '../dtos/categories.dto';

import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'Geek',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(name: string) {
    const value = this.categories.find(
      (item) => item.name.toLowerCase() === name.toLowerCase(),
    );
    if (!value) {
      throw new NotFoundException('Not exists this categories');
    }
    return value;
  }

  createOne(payload: CreateCategoriesDto) {
    this.counterId++;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  updateOne(name: string, payload: UpdateCategoriesDto) {
    const index = this.categories.findIndex(
      (item) => item.name.toLowerCase() === name.toLowerCase(),
    );
    if (!index) {
      throw new NotFoundException('Not exists this categories');
    }
    const value = this.categories.find(
      (item) => item.name.toLowerCase() === name.toLowerCase(),
    );
    this.categories[index] = {
      ...value,
      ...payload,
    };
    return value;
  }

  deleteOne(name: string) {
    const index = this.categories.findIndex(
      (item) => item.name.toLowerCase() === name.toLowerCase(),
    );
    if (!index) {
      throw new NotFoundException('Not exists this categories');
    }
    this.categories.splice(index, 1);
    return 'category is delete';
  }
}
