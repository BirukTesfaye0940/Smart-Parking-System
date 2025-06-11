import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const tx_ref = searchParams.get('tx_ref');

  if (!tx_ref) {
    return NextResponse.json({ message: 'Missing tx_ref' }, { status: 400 });
  }

  try {
    // 1. Verify payment with Chapa
    const verifyRes = await fetch(`https://api.chapa.co/v1/transaction/verify/${tx_ref}`, {
      headers: {
        Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
      },
    });

    const result = await verifyRes.json();

    if (result.status !== 'success') {
      return NextResponse.json({ message: 'Payment not verified' }, { status: 400 });
    }

    // 2. Extract booking ID from tx_ref
    const [, bookingID] = tx_ref.split('-');

    const booking = await prisma.booking.findUnique({
      where: {
        booking_id: parseInt(bookingID),
      },
      include: {
        space: true,
        lot: true,
      },
    });

    if (!booking || booking.status === 'paid') {
      return NextResponse.json({ message: 'Booking not found or already paid' }, { status: 404 });
    }

    // 3. Get latest effective price for the lot
    const priceRecord = await prisma.price.findFirst({
      where: {
        lot_id: booking.lot_id,
      },
      orderBy: {
        effective_date: 'desc',
      },
    });

    const pricePerHour = priceRecord.price_per_hour;

    // 4. Recalculate amount based on latest price
    const hours = Math.ceil((new Date(booking.end_time) - new Date(booking.start_time)) / (1000 * 60 * 60));
    const amount = pricePerHour * hours;

    // 5. Mark booking as paid
    await prisma.booking.update({
      where: { booking_id: booking.booking_id },
      data: { status: 'paid' },
    });

    // 6. Mark parking space as available
    await prisma.parkingSpace.update({
      where: { space_id: booking.space_id },
      data: { status: 'available' },
    });

    // 7. Create payment record
    await prisma.payment.create({
      data: {
        booking_id: booking.booking_id,
        user_id: booking.user_id,
        amount,
        payment_method: 'Chapa',
      },
    });

    return NextResponse.json({ message: 'Payment confirmed and booking updated' });

  } catch (error) {
    console.error('[CHAPA_CALLBACK_ERROR]', error);
    return NextResponse.json({ message: 'Server error during callback' }, { status: 500 });
  }
}
