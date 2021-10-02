import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dtos/users.dtos';

import { User } from '../entities/user.entity';
@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      email: 'juan@gmail.com',
      password: 'juanforever',
      role: 'user',
    },
  ];
  findAll() {
    return this.users;
  }
  findOne(id: number) {
    const value = this.users.find((item) => item.id === id);
    if (!value) {
      throw new NotFoundException(`User with id: ${id} not exists`);
    }
    return value;
  }

  createOne(payload: CreateUserDto) {
    this.counterId++;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateOne(id: number, payload: any) {
    const index = this.users.findIndex((item) => item.id === id);
    if (!index) {
      throw new NotFoundException('This user not exists');
    }
    const value = this.users[index];
    const updateUser = {
      ...value,
      ...payload,
    };
    this.users[index] = updateUser;
    return updateUser;
  }

  deleteOne(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (!index) {
      throw new NotFoundException('This user not exists');
    }
    this.users.splice(index, 1);
    return 'This user is delete';
  }
}
