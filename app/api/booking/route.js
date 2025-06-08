
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";
export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { lot_id, space_id,start_time,end_time } = body;

  if (!lot_id || !space_id|| !start_time || !end_time) {
    return NextResponse.json({ error: 'Missing lot or space ID' }, { status: 400 });
  }

   const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }


  try {
    const booking = await prisma.booking.create({
      data: {
        user_id:user.user_id,
        lot_id,
        space_id,
        start_time: new Date(start_time),
        end_time: new Date(end_time),
        status :"unpaid"
        // Add other required fields
      },
    });

    // Optionally update space status
    await prisma.parkingSpace.update({
      where: { space_id },
      data: { status: 'unavailable' },
    });

    return NextResponse.json({ success: true, data: booking });
  } catch (err) {
    console.error('Booking error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
