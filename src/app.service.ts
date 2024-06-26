import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return { msg: 'Hello World!' };
  }

  getWorld(name: string): string {
    return `world name is ${name}`;
  }

  postHello(obj: object): object {
    return {msg:`world name is ${JSON.stringify(obj)}`} 
  }
}
