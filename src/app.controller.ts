import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello NESTJS!';
  }

  //Declare new route with /nuevo
  @Get('nuevo')
  newEndpoint() {
    return 'I am new';
  }

  @Get('/route/')
  otherNew() {
    return 'with /sas/';
  }
}
