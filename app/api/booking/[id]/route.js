import { NextResponse } from 'next/server';
import prisma from "../../../../lib/prisma";

export async function DELETE(request, { params }) {
  const id = parseInt(params.id, 10);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid booking ID' }, { status: 400 });
  }

  try {
    await prisma.booking.delete({
      where: { booking_id: id },
    });

    return NextResponse.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Delete booking error:', error);
    return NextResponse.json({ error: 'Failed to delete booking' }, { status: 500 });
  }
}
