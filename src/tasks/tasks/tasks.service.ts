import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getHello(): object {
    return {
      data: [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled' },
      ],
      msg: '123456',
      success: true,
    };
  }
}
