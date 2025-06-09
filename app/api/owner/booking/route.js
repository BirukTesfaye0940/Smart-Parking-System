import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma"; // Adjust this path if needed
import { authOptions } from "../../../api/auth/[...nextauth]/route"; // Adjust this path if needed

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "owner") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const ownerId = session.user.id;

  // ✅ Step 1: Get the lot owned by this user
  const lot = await prisma.parkingLot.findFirst({
    where: { owner_id: ownerId },
    select: { lot_id: true, name: true, address: true },
  });

  if (!lot) {
    return NextResponse.json({ error: "No parking lot found for owner" }, { status: 404 });
  }

  // ✅ Step 2: Get all bookings for this lot
  const bookings = await prisma.booking.findMany({
    where: {
      lot_id: lot.lot_id,
    },
    include: {
      user: true,
      space: true,
      lot: true,
    },
    orderBy: {
      start_time: "desc",
    },
  });

  // ✅ Step 3: Return lot info + bookings
  return NextResponse.json({
    lot,
    bookings,
  });
}
