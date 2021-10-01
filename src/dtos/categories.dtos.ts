import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoriesDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateCategoriesDto extends PartialType(CreateCategoriesDto) {}
