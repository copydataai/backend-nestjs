import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  findAll() {
    return this.productModel.find().exec();
  }

  async findOne(id: string) {
    const value = await this.productModel.findById(id).exec();
    if (!value) {
      // return {
      //   error: true,
      //   message: "Don't exists this product",
      // };
      throw new NotFoundException(`Product ${id} is not found`);
    }
    return {
      message: 'OK',
      payload: value,
    };
  }

  // async createOne(payload: CreateProductDto) {
  //   const newProduct = {
  //     ...payload,
  //   };
  //   this.productModel.insertMany(newProduct);
  //   return newProduct;
  // }

  // updateOne(id: number, payload: any) {
  //   const product = this.findOne(id);
  //   if (!product) {
  //     return null;
  //   }
  //   const index = this.products.findIndex((item) => item.id === id);
  //   this.products[index] = {
  //     ...product,
  //     ...payload,
  //   };
  //   return this.products[index];
  // }
  // deleteOne(id: number) {
  //   const product = this.products.findIndex((item) => item.id === id);
  //   if (product !== -1) {
  //     this.products.splice(product, 1);
  //     return 'Product delete';
  //   }
  //   return "Don't exists product";
  // }
}
