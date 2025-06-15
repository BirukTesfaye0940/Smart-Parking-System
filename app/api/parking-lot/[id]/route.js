import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma'; 

export async function DELETE(request, { params }) {
  const id = parseInt(params.id, 10);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid lot ID' }, { status: 400 });
  }

  try {
    // Delete bookings/spaces if needed before deleting lot
    await prisma.booking.deleteMany({ where: { lot_id: id } });
    await prisma.space.deleteMany({ where: { lot_id: id } });

    await prisma.parking_lot.delete({
      where: { lot_id: id },
    });

    return NextResponse.json({ message: 'Parking lot deleted successfully' });
  } catch (error) {
    console.error('Delete lot error:', error);
    return NextResponse.json({ error: 'Failed to delete parking lot' }, { status: 500 });
  }
}