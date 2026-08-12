import { NextResponse } from 'next/server';
import { UnconfiguredPaymentProvider } from '@/lib/payments';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { bookingId, amount, currency = 'EGP', customer } = body ?? {};

    if (!bookingId || typeof amount !== 'number' || amount <= 0 || !customer?.name) {
      return NextResponse.json({ error: 'بيانات الدفع غير صحيحة.' }, { status: 400 });
    }

    // The selected gateway will be injected here server-side after credentials are configured.
    const provider = new UnconfiguredPaymentProvider();
    const result = await provider.createPayment({ bookingId, amount, currency, customer });

    return NextResponse.json(result, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'تعذر بدء عملية الدفع.' }, { status: 500 });
  }
}
