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

  async main() {
    // Variable to keep state of the payment status
    let paymentStatus: string;

    // Connecting to devnet for this example
    console.log('1. ✅ Establish connection to the network');
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    /**
     * Simulate a checkout experience
     *
     * Recommendation:
     * `amount` and `reference` should be created in a trusted environment (server).
     * The `reference` should be unique to a single customer session,
     * and will be used to find and validate the payment in the future.
     *
     */
    console.log('2. 🛍 Simulate a customer checkout \n');
    const recipient = new PublicKey('MERCHANT_WALLET');
    const amount = new BigNumber(20);
    const reference = 'ss'; // new Keypair().publicKey;
    const label = 'Jungle Cats store';
    const message = 'Jungle Cats store - your order - #001234';
    const memo = 'JC#4098';

    /**
     * Create a payment request link
     *
     * Solana Pay uses a standard URL scheme across wallets for native SOL and SPL Token payments.
     * Several parameters are encoded within the link representing an intent to collect payment from a customer.
     */
    console.log('3. 💰 Create a payment request link \n');
    const url = encodeURL({
      recipient,
      amount,
      reference,
      label,
      message,
      memo,
    });
  }
}
