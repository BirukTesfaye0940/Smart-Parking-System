import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
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
  try {
    const { spaceId: space_id, newStatus: status } = await req.json();
    console.log('Received data:', { space_id, status });

    if (!space_id || !status) {
      return NextResponse.json({ error: 'space_id and status are required' }, { status: 400 });
    }

    const space = await prisma.parkingSpace.findUnique({ where: { space_id } });
    if (!space) {
      return NextResponse.json({ error: 'Parking space not found' }, { status: 404 });
    }

    // Update the status of the parking space
    await prisma.parkingSpace.update({
      where: { space_id },
      data: { status },
    });

    // Find the latest availability log entry for this space
    const latestLog = await prisma.availabilityLog.findFirst({
      where: { space_id },
      orderBy: { timestamp: 'desc' },
    });

    if (latestLog) {
      // Update the latest log entry
      await prisma.availabilityLog.update({
        where: { log_id: latestLog.log_id },
        data: { status },
      });
    } else {
      // No log found, so create a new one
      await prisma.availabilityLog.create({
        data: {
          space_id,
          status,
        },
      });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error('[AVAILABILITY_LOG_ERROR]', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


// export async function POST(req) {
//   const session = await getServerSession(authOptions);

//   if (!session || session.user.role !== 'owner') {
//     return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
//   }

//   const { spaceId, newStatus } = await req.json();

//   // Check ownership of the space before allowing update
//   const space = await prisma.parkingSpace.findUnique({
//     where: { space_id: spaceId },
//     include: {
//       lot: true,
//     },
//   });

//   if (!space || space.lot.owner_id !== session.user.id) {
//     return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
//   }

//   // Log new availability
//   await prisma.availabilityLog.create({
//     data: {
//       space_id: spaceId,
//       status: newStatus,
//     },
//   });

//   return new Response(JSON.stringify({ success: true }));
// }
