import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  findAll() {
    return this.customerModel.find().exec();
  }

  findOne(id: string) {
    const value = this.customerModel.findById(id);
    if (!value) {
      throw new NotFoundException('This is users not exists');
    }
    return value;
  }

  // createOne(payload: CreateCustomerDto) {
  //   const newCustomer = {
  //     ...payload,
  //   };
  //   this.customers.push(newCustomer);
  //   return newCustomer;
  // }

  // updateOne(id: number, payload: UpdateCustomerDto) {
  //   const index = this.customers.findIndex((item) => item.id === id);
  //   if (!index) {
  //     throw new NotFoundException('This is users not exists');
  //   }
  //   const value = this.customers[index];
  //   const updateCustomer = {
  //     ...value,
  //     ...payload,
  //   };
  //   this.customers[index] = updateCustomer;
  //   return updateCustomer;
  // }

  // deleteOne(id: number) {
  //   const index = this.customers.findIndex((item) => item.id === id);
  //   if (!index) {
  //     throw new NotFoundException('This is users not exists');
  //   }
  //   this.customers.splice(index, 1);
  //   return 'delete customer';
  // }
}
