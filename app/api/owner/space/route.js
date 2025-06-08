import { getServerSession } from "next-auth";
import prisma from "../../../../lib/prisma"; // Adjust this path if needed
import { authOptions } from "../../../api/auth/[...nextauth]/route"; // Adjust this path if needed

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'owner') {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const ownerId = session.user.id;

  const spaces = await prisma.parkingSpace.findMany({
    where: {
      lot: {
        owner_id: ownerId,
      },
    },
    include: {
      lot: true,
      availability: {
        orderBy: { timestamp: 'desc' },
        take: 1,
      },
    },
  });

  return new Response(JSON.stringify(spaces));
}


export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'owner') {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const { spaceId, newStatus } = await req.json();

  // Check ownership of the space before allowing update
  const space = await prisma.parkingSpace.findUnique({
    where: { space_id: spaceId },
    include: {
      lot: true,
    },
  });

  if (!space || space.lot.owner_id !== session.user.id) {
    return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
  }

  // Log new availability
  await prisma.availabilityLog.create({
    data: {
      space_id: spaceId,
      status: newStatus,
    },
  });

  return new Response(JSON.stringify({ success: true }));
}
