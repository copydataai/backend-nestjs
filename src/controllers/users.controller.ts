import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  GetUsers() {
    return this.usersService.findAll();
  }

  @Get(':userId')
  GetUser(@Param('userId') userId: number) {
    const value = this.usersService.findOne(userId);
    if (!value) {
      throw new NotFoundException(`User with id: ${userId} not exists`);
    }
    return value;
  }
}
