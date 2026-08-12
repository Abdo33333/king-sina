import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get('x-payment-signature');

  // IMPORTANT: verify the gateway's signature against the raw request body before parsing.
  // The exact algorithm/header will be implemented for the selected Egyptian gateway.
  if (!signature) {
    return NextResponse.json({ error: 'Missing payment signature.' }, { status: 401 });
  }

  // TODO production: verify signature, enforce idempotency, update Payment + Booking in one DB transaction.
  void rawBody;
  return NextResponse.json({ received: true });
}
