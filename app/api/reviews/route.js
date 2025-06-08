
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";
export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { lot_id, rating, comment } = body;

    if (!lot_id || typeof rating !== 'number' || !comment) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get user from session email
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Validate parking lot
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
