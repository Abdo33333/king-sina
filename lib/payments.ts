export type PaymentRequest = {
  bookingId: string;
  amount: number;
  currency: string;
  customer: { name: string; email?: string; phone?: string };
};

export type PaymentResult = {
  provider: string;
  checkoutUrl?: string;
  transactionId?: string;
  status: 'pending' | 'paid' | 'failed';
};

export interface PaymentProvider {
  createPayment(request: PaymentRequest): Promise<PaymentResult>;
  verifyPayment(transactionId: string): Promise<PaymentResult>;
  refundPayment(transactionId: string, amount?: number): Promise<PaymentResult>;
}

/**
 * Safe placeholder until the business selects and supplies credentials for a real gateway.
 * Never mark a booking as paid from the browser; verification must happen server-side/webhook-side.
 */
export class UnconfiguredPaymentProvider implements PaymentProvider {
  async createPayment(): Promise<PaymentResult> {
    return { provider: 'unconfigured', status: 'pending' };
  }
  async verifyPayment(): Promise<PaymentResult> {
    return { provider: 'unconfigured', status: 'pending' };
  }
  async refundPayment(): Promise<PaymentResult> {
    return { provider: 'unconfigured', status: 'pending' };
  }
}
