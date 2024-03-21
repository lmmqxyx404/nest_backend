import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getWorld(name: string): string {
    return `world name is ${name}`;
  }

  postHello(obj: object): string {
    return `world name is ${JSON.stringify(obj)}`;
  }
}
