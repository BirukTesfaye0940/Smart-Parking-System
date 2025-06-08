import { getServerSession } from "next-auth";
import prisma from "../../../../lib/prisma"; // Adjust this path if needed
import { authOptions } from "../../../api/auth/[...nextauth]/route"; // Adjust this path if needed

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const {  price_per_hour, effective_date } = await req.json();

  // ✅ 1. Check session and role
  if (!session || session.user.role !== 'owner') {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  // ✅ 2. Get this owner's ID
  const owner = await prisma.owner.findUnique({
    where: { email: session.user.email },
    select: { owner_id: true },
  });

  if (!owner) {
    return new Response(JSON.stringify({ error: 'Owner not found' }), { status: 404 });
  }

  // ✅ 3. Check if the lot belongs to the owner
  const parkingLot = await prisma.parkingLot.findFirst({
    where: {
      owner_id: owner.owner_id,
    },
  });

  if (!parkingLot) {
    return new Response(JSON.stringify({ error: 'This parking lot does not belong to you' }), { status: 403 });
  }

  // ✅ 4. Update or create price
  const price = await prisma.price.upsert({
    where: {
      lot_id:parkingLot.lot_id, // assuming unique constraint on lot_id in Price table, otherwise use composite
    },
    update: {
      price_per_hour,
      effective_date: new Date(effective_date),
    },
    create: {
      lot_id:parkingLot.lot_id,
      price_per_hour,
      effective_date: new Date(effective_date),
    },
  });

  return new Response(JSON.stringify(price), { status: 200 });
}
