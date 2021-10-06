import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';

@Injectable()
export class BrandService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  getAll() {
    return this.brandModel.find().exec();
  }

  getOne(name: string) {
    const value = this.brandModel.find({ name }).exec();
    if (!value) {
      throw new NotFoundException('Not exists this brand');
    }
    return value;
  }

  // createOne(payload: CreateBrandDto) {
  //   const newBrand = {
  //     ...payload,
  //   };
  //   this.brands.push(newBrand);
  //   return newBrand;
  // }

  // updateOne(name: string, payload: UpdateBrandDto) {
  //   const index = this.brands.findIndex(
  //     (item) => item.name.toLowerCase() === name.toLowerCase(),
  //   );
  //   if (!index) {
  //     throw new NotFoundException('Not exists this brand');
  //   }
  //   const value = this.brands.find(
  //     (item) => item.name.toLowerCase() === name.toLowerCase(),
  //   );
  //   this.brands[index] = {
  //     ...value,
  //     ...payload,
  //   };
  //   return this.brands[index];
  // }

  // deleteOne(name: string) {
  //   const index = this.brands.findIndex(
  //     (item) => item.name.toLowerCase() === name.toLowerCase(),
  //   );
  //   if (!index) {
  //     throw new NotFoundException('Not exists this brand');
  //   }
  //   this.brands.splice(index, 1);
  //   return 'Brand delete';
  // }
}
