# KING SINA — النقل البري

Premium Cairo → Sinai transportation booking platform.

## Product flow

Search → Select trip → Passenger details → Review → Payment → Confirmation → Digital ticket.

## Current architecture

- Next.js + TypeScript
- PostgreSQL + Prisma schema
- Arabic RTL / English-ready UI
- Booking availability helpers
- Payment provider abstraction
- Configurable environment variables
- Route/destination content designed to accept real operational data later

## Production requirements before launch

1. Provision PostgreSQL and run Prisma migrations.
2. Configure authentication secrets.
3. Select a real Egyptian payment gateway and configure its server-side credentials.
4. Implement signed payment webhooks and idempotent payment confirmation.
5. Add real routes, schedules, prices, vehicle capacity, contact information and policies.
6. Add email/WhatsApp/SMS notification providers as required.
7. Configure analytics and conversion events.
8. Run responsive, accessibility, security and payment-flow QA.

## Important

No payment is considered successful based on client-side state. The production payment flow must verify gateway callbacks/webhooks server-side before changing a booking to `PAID`/`CONFIRMED`.
