import { Injectable, NotFoundException } from '@nestjs/common';

import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';

@Injectable()
export class BrandService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 0,
      name: 'asus',
    },
  ];

  getAll() {
    return this.brands;
  }

  getOne(name: string) {
    const value = this.brands.find(
      (item) => item.name.toLowerCase() === name.toLowerCase(),
    );
    if (!value) {
      throw new NotFoundException('Not exists this brand');
    }
    return value;
  }

  createOne(payload: CreateBrandDto) {
    this.counterId++;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  updateOne(name: string, payload: UpdateBrandDto) {
    const index = this.brands.findIndex(
      (item) => item.name.toLowerCase() === name.toLowerCase(),
    );
    if (!index) {
      throw new NotFoundException('Not exists this brand');
    }
    const value = this.brands.find(
      (item) => item.name.toLowerCase() === name.toLowerCase(),
    );
    this.brands[index] = {
      ...value,
      ...payload,
    };
    return this.brands[index];
  }

  deleteOne(name: string) {
    const index = this.brands.findIndex(
      (item) => item.name.toLowerCase() === name.toLowerCase(),
    );
    if (!index) {
      throw new NotFoundException('Not exists this brand');
    }
    this.brands.splice(index, 1);
    return 'Brand delete';
  }
}
