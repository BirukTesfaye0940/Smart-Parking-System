import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function POST(req) {
  try {
    const { user_id, owner_id, message } = await req.json();

    if (!message || (!user_id && !owner_id)) {
      return NextResponse.json(
        { error: 'Message and either user_id or owner_id are required' },
        { status: 400 }
      );
    }

    const notification = await prisma.notification.create({
      data: {
        message,
        user_id: user_id ?? null,
        owner_id: owner_id ?? null,
      },
    });

    return NextResponse.json({ success: true, data: notification }, { status: 201 });
  } catch (error) {
    console.error('[CREATE_NOTIFICATION_ERROR]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
