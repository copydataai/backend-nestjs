import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      description: 'This is first product.',
      price: 122,
      stock: 12,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const value = this.products.find((item) => item.id === id);
    if (!value) {
      // return {
      //   error: true,
      //   message: "Don't exists this product",
      // };
      throw new NotFoundException('Product is not found');
    }
    return {
      message: 'OK',
      payload: value,
    };
  }

  createOne(payload: any) {
    this.counterId = this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  updateOne(id: string, payload: any) {
    const product = this.findOne(id);
    if (!product) {
      return null;
    }
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...product,
      ...payload,
    };
    return this.products[index];
  }
  deleteOne(id: string) {
    const product = this.products.findIndex((item) => item.id === id);
    if (product !== -1) {
      this.products.splice(product, 1);
      return 'Product delete';
    }
    return "Don't exists product";
  }
}
