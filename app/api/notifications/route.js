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

// /app/api/notifications/route.ts
// import { NextResponse } from 'next/server';
// import prisma from '../../../lib/prisma';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const user_id = searchParams.get('user_id');
    const owner_id = searchParams.get('owner_id');

    if (!user_id && !owner_id) {
      return NextResponse.json({ error: 'User ID or Owner ID required' }, { status: 400 });
    }

    const notifications = await prisma.notification.findMany({
      where: {
        OR: [
          user_id ? { user_id: Number(user_id) } : undefined,
          owner_id ? { owner_id: Number(owner_id) } : undefined,
        ].filter(Boolean),
      },
      orderBy: { sent_at: 'desc' },
    });

    return NextResponse.json({ notifications });
  } catch (error) {
    console.error('[FETCH_NOTIFICATIONS_ERROR]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
