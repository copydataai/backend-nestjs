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
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dto';
import { BrandService } from '../services/brand.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('brand')
@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Get()
  @ApiOperation({ summary: 'List of brands' })
  getBrands() {
    return this.brandService.getAll();
  }

  @Get(':name')
  getBrand(@Param('name') name: string) {
    return this.brandService.getOne(name);
  }

  @Post()
  createBrand(@Body() payload: CreateBrandDto) {
    return this.brandService.createOne(payload);
  }

  @Put(':name')
  updateBrand(@Param('name') name: string, @Body() payload: UpdateBrandDto) {
    return this.brandService.updateOne(name, payload);
  }

  @Delete(':name')
  deleteBrand(@Param('name') name: string) {
    return this.brandService.deleteOne(name);
  }
}
