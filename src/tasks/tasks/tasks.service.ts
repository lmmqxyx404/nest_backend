import { Injectable } from '@nestjs/common';
import { Cluster, clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import { encodeURL, createQR } from '@solana/pay';
import BigNumber from 'bignumber.js';
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
