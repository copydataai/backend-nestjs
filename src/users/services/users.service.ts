import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entity';
import { ProductsService } from '../../products/services/products.service';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  findAll() {
    return this.userModel.find().exec();
  }
  async findOne(id: string) {
    const value = await this.userModel.findById(id).exec();
    if (!value) {
      throw new NotFoundException(`User with id: ${id} not exists`);
    }
    return value;
  }

  // async getOrders(id: number) {
  //   const user = this.findOne(id);
  //   if (!user) {
  //     throw new NotFoundException("Don't have orders");
  //   }
  //   return {
  //     date: new Date(),
  //     user,
  //     products: await this.productsService.findAll(),
  //   };
  // }

  // createOne(payload: CreateUserDto) {
  //   const newUser = {
  //     ...payload,
  //   };
  //   this.users.push(newUser);
  //   return newUser;
  // }

  // updateOne(id: number, payload: any) {
  //   const index = this.users.findIndex((item) => item.id === id);
  //   if (!index) {
  //     throw new NotFoundException('This user not exists');
  //   }
  //   const value = this.users[index];
  //   const updateUser = {
  //     ...value,
  //     ...payload,
  //   };
  //   this.users[index] = updateUser;
  //   return updateUser;
  // }

  // deleteOne(id: number) {
  //   const index = this.users.findIndex((item) => item.id === id);
  //   if (!index) {
  //     throw new NotFoundException('This user not exists');
  //   }
  //   this.users.splice(index, 1);
  //   return 'This user is delete';
  // }
}
