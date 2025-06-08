import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, booking_id, amount, payment_method } = body;

    // Basic validation
    if (!email || !booking_id || !amount || !payment_method) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Get booking
    const booking = await prisma.booking.findUnique({
      where: { booking_id },
    });

    if (!booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    // Ensure booking belongs to user
    if (booking.user_id !== user.user_id) {
      return NextResponse.json({ error: 'Unauthorized: Booking does not belong to user' }, { status: 403 });
    }

    // Check if payment already exists
    const existingPayment = await prisma.payment.findUnique({
      where: { booking_id },
    });

    if (existingPayment) {
      return NextResponse.json({ error: 'Payment already exists for this booking' }, { status: 409 });
    }

    // Create payment
    const payment = await prisma.payment.create({
      data: {
        booking_id,
        user_id: user.user_id,
        amount,
        payment_method,
      },
    });

    return NextResponse.json({ success: true, data: payment }, { status: 201 });
  } catch (error) {
    console.error('[CREATE_PAYMENT_ERROR]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
