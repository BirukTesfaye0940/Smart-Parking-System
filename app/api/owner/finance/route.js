import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma"; // Adjust this path if needed
import { authOptions } from "../../../api/auth/[...nextauth]/route"; // Adjust this path if needed
import {
    startOfDay,
    endOfDay,
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth,
} from 'date-fns';

export async function GET(request) {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'owner') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const ownerId = session.user.id;
    const { searchParams } = new URL(request.url);
    const range = searchParams.get('range'); // daily, weekly, monthly

    if (!['daily', 'weekly', 'monthly'].includes(range)) {
        return NextResponse.json(
            { error: 'Missing or invalid ?range=daily|weekly|monthly' },
            { status: 400 }
        );
    }

    const now = new Date();
    let start, end;

    switch (range) {
        case 'daily':
            start = startOfDay(now);
            end = endOfDay(now);
            break;
        case 'weekly':
            start = startOfWeek(now);
            end = endOfWeek(now);
            break;
        case 'monthly':
            start = startOfMonth(now);
            end = endOfMonth(now);
            break;
    }

    try {
        // Get the owner's lot
        const lot = await prisma.parkingLot.findFirst({
            where: { owner_id: ownerId },
            select: { lot_id: true },
        });

        if (!lot) {
            return NextResponse.json({ error: 'No lot found for owner' }, { status: 404 });
        }





        // With this:
        const bookings = await prisma.booking.findMany({
            where: {
                lot_id: lot.lot_id,
                start_time: { gte: start, lte: end },
            },
            include: {
                payment: true,
            },
        });

        // Group and calculate
        const stats = {
            paid: { amount: 0, users: new Set() },
            unpaid: { amount: 0, users: new Set() },
        };

        bookings.forEach(b => {
            const group = stats[b.status];
            group.amount += b.payment?.[0]?.amount || 0;
            group.users.add(b.user_id);
        });

        return NextResponse.json({
            range,
            paid: {
                amount: stats.paid.amount,
                users: stats.paid.users.size,
            },
            unpaid: {
                amount: stats.unpaid.amount,
                users: stats.unpaid.users.size,
            },
        });


        // Prepare response
        const result = {
            range,
            paid: bookings.find(b => b.status === 'paid')?._count.booking_id || 0,
            unpaid: bookings.find(b => b.status === 'unpaid')?._count.booking_id || 0,
        };

        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching booking stats:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
