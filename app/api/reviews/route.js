import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, lot_id, rating, comment } = body;

    // Validate input
    if (!email || !lot_id || typeof rating !== 'number' || !comment) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Validate parking lot exists
    const lot = await prisma.parkingLot.findUnique({
      where: { lot_id },
    });

    if (!lot) {
      return NextResponse.json({ error: 'Parking lot not found' }, { status: 404 });
    }

    // Create review
    const review = await prisma.review.create({
      data: {
        user_id: user.user_id,
        lot_id,
        rating,
        comment,
      },
    });

    return NextResponse.json({ success: true, data: review }, { status: 201 });
  } catch (error) {
    console.error('[CREATE_REVIEW_ERROR]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
