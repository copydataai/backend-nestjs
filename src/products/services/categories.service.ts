import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateCategoriesDto,
  UpdateCategoriesDto,
} from '../dtos/categories.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  findAll() {
    return this.categoryModel.find().exec;
  }

  findOne(name: string) {
    const value = this.categoryModel.find({ name }).exec();
    if (!value) {
      throw new NotFoundException('Not exists this categories');
    }
    return value;
  }

  // createOne(payload: CreateCategoriesDto) {
  //   const newCategory = {
  //     id: this.counterId,
  //     ...payload,
  //   };
  //   this.categories.push(newCategory);
  //   return newCategory;
  // }

  // updateOne(name: string, payload: UpdateCategoriesDto) {
  //   const index = this.categories.findIndex(
  //     (item) => item.name.toLowerCase() === name.toLowerCase(),
  //   );
  //   if (!index) {
  //     throw new NotFoundException('Not exists this categories');
  //   }
  //   const value = this.categories.find(
  //     (item) => item.name.toLowerCase() === name.toLowerCase(),
  //   );
  //   this.categories[index] = {
  //     ...value,
  //     ...payload,
  //   };
  //   return value;
  // }

  // deleteOne(name: string) {
  //   const index = this.categories.findIndex(
  //     (item) => item.name.toLowerCase() === name.toLowerCase(),
  //   );
  //   if (!index) {
  //     throw new NotFoundException('Not exists this categories');
  //   }
  //   this.categories.splice(index, 1);
  //   return 'category is delete';
  // }
}
