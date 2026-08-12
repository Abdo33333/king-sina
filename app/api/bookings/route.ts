import { NextResponse } from 'next/server';
import { canReserve, generateBookingReference, reservationExpiry } from '@/lib/booking';

// Production note: replace the temporary in-memory contract with Prisma transactions.
// The transaction must atomically validate capacity, create the booking, and increment reservations.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tripId, passengers, pickupLocation, passengerData } = body ?? {};

    if (!tripId || !Number.isInteger(passengers) || passengers < 1 || !Array.isArray(passengerData)) {
      return NextResponse.json({ error: 'بيانات الحجز غير مكتملة.' }, { status: 400 });
    }

    if (passengerData.length !== passengers) {
      return NextResponse.json({ error: 'عدد بيانات المسافرين لا يطابق عدد المقاعد.' }, { status: 400 });
    }

    // The real implementation will load the trip with a row lock inside a DB transaction.
    const exampleAvailability = { capacity: 0, reservedSeats: 0 };
    if (!canReserve(exampleAvailability, passengers)) {
      return NextResponse.json({ error: 'الرحلة غير متاحة للحجز حاليًا.' }, { status: 409 });
    }

    const booking = {
      reference: generateBookingReference(),
      tripId,
      passengers,
      pickupLocation: pickupLocation || null,
      passengerData,
      status: 'PENDING',
      paymentStatus: 'PENDING',
      expiresAt: reservationExpiry(10).toISOString(),
    };

    return NextResponse.json({ booking }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'حدث خطأ غير متوقع.' }, { status: 500 });
  }
}
