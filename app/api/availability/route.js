import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function POST(req) {
  try {
    const { space_id, status } = await req.json();

    if (!space_id || !status) {
      return NextResponse.json({ error: 'space_id and status are required' }, { status: 400 });
    }

    const space = await prisma.parkingSpace.findUnique({ where: { space_id } });
    if (!space) {
      return NextResponse.json({ error: 'Parking space not found' }, { status: 404 });
    }

    const log = await prisma.availabilityLog.create({
      data: {
        space_id,
        status,
      },
    });

    return NextResponse.json({ success: true, data: log }, { status: 201 });
  } catch (err) {
    console.error('[AVAILABILITY_LOG_ERROR]', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
