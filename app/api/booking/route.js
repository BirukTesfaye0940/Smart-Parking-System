import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, space_id, start_time, end_time } = body;

    // Validate inputs
    if (!email || !space_id || !start_time || !end_time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if space exists
    const space = await prisma.parkingSpace.findUnique({
      where: { space_id },
    });

    if (!space) {
      return NextResponse.json({ error: 'Parking space not found' }, { status: 404 });
    }

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        user_id: user.user_id,
        space_id,
        start_time: new Date(start_time),
        end_time: new Date(end_time),
        status: 'reserved',
      },
    });

    return NextResponse.json({ success: true, data: booking }, { status: 201 });
  } catch (error) {
    console.error('[CREATE_BOOKING_ERROR]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
