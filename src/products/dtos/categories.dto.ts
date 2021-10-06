import { PartialType } from '@nestjs/swagger';
import {
  Min,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class CreateCategoriesDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateCategoriesDto extends PartialType(CreateCategoriesDto) {}

export class FilterCategoriesDto {
  @IsOptional()
  @IsPositive()
  limit: number;
  @IsOptional()
  @Min(0)
  offset: number;
}
