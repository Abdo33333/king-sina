export type TripAvailability = {
  capacity: number;
  reservedSeats: number;
};

export function availableSeats(trip: TripAvailability) {
  return Math.max(0, trip.capacity - trip.reservedSeats);
}

export function canReserve(trip: TripAvailability, passengers: number) {
  return passengers > 0 && availableSeats(trip) >= passengers;
}

export function generateBookingReference(prefix = 'SIN') {
  const stamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${prefix}-${stamp}-${random}`;
}

export function reservationExpiry(minutes = 10) {
  return new Date(Date.now() + minutes * 60_000);
}
