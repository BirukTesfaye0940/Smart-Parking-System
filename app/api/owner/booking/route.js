import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma"; // Adjust this path if needed
import { authOptions } from "../../../api/auth/[...nextauth]/route"; // Adjust this path if needed

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "owner") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
//finance 
  const ownerId = session.user.id;

  // ✅ Fetch the entire lot with all related data
  const lot = await prisma.parkingLot.findFirst({
    where: { owner_id: ownerId },
    include: {
      owner: true,
      spaces: {
        include: {
          availability: true,
          bookings: {
            include: {
              user: true,
              payment: true,
            },
          },
        },
      },
      locations: true,
      prices: true,
      reviews: true,
      booking: {
        include: {
          user: true,
          space: true,
          payment: true,
        },
      },
    },
  });
  console.log("Fetched lot:", lot);

  if (!lot) {
    return NextResponse.json({ error: "No parking lot found for owner" }, { status: 404 });
  }

  return NextResponse.json({ lot });
}
