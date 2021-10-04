import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    const apiKey = this.configService.get('API_KEY');
    const dbName = this.configService.get('DB_NAME');
    return `Hello World! ${apiKey} ${dbName}`;
  }
}
