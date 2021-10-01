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
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateOne(id: number, payload: any) {
    return this.users;
  }
}
