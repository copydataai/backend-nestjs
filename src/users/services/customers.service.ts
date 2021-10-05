import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { Customer } from '../entities/customer.entity';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Juan',
      lastName: 'Garza',
      phone: '+5917850131',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const value = this.customers.find((item) => item.id === id);
    if (!value) {
      throw new NotFoundException('This is users not exists');
    }
    return value;
  }

  createOne(payload: CreateCustomerDto) {
    this.counterId++;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  updateOne(id: number, payload: UpdateCustomerDto) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (!index) {
      throw new NotFoundException('This is users not exists');
    }
    const value = this.customers[index];
    const updateCustomer = {
      ...value,
      ...payload,
    };
    this.customers[index] = updateCustomer;
    return updateCustomer;
  }

  deleteOne(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (!index) {
      throw new NotFoundException('This is users not exists');
    }
    this.customers.splice(index, 1);
    return 'delete customer';
  }
}
