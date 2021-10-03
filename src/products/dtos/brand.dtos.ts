import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsUrl()
  @IsNotEmpty()
  image: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
