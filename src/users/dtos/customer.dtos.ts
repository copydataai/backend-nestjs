import { IsString, IsPhoneNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
  @IsString()
  name: string;
  @IsString()
  lastName: string;
  @IsString()
  @IsPhoneNumber()
  phone: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
