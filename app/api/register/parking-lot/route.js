// import { NextResponse } from 'next/server';
// import prisma from '../../../../lib/prisma';

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const {
//       owner_id,
//       lot_name,
//       capacity,
//       spaces,
//       latitude,
//       longitude,
//       street_address_id,
//     } = body;

//     // Validate required fields
//     if (
//       !owner_id ||
//       !lot_name ||
//       typeof capacity !== 'number' ||
//       !Array.isArray(spaces) ||
//       typeof latitude !== 'number' ||
//       typeof longitude !== 'number' ||
//       !street_address_id
//     ) {
//       return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 });
//     }

//     // Check if the owner exists
//     const owner = await prisma.owner.findUnique({ where: { owner_id } });
//     if (!owner) {
//       return NextResponse.json({ error: 'Owner not found' }, { status: 404 });
//     }

//     // Step 1: Create the ParkingLot first
//     const newLot = await prisma.parkingLot.create({
//       data: {
//         owner_id,
//         lot_name,
//         capacity,
//       },
//     });

//     // Step 2: Create associated ParkingSpaces (if any)
//     if (spaces.length > 0) {
//       await prisma.parkingSpace.createMany({
//         data: spaces.map((space) => ({
//           lot_id: newLot.lot_id,
//           space_number: space.space_number,
//           is_handicap: space.is_handicap ?? false,
//           status: space.status ?? 'available',
//         })),
//       });
//     }

//     // Step 3: Create associated Location
//     const location = await prisma.location.create({
//       data: {
//         lot_id: newLot.lot_id,
//         latitude,
//         longitude,
//         street_address_id,
//       },
//     });


//     return NextResponse.json(
//       {
//         success: true,
        
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     //console.error('[CREATE_PARKING_LOT_ERROR]', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      owner_id,
      lot_name,
      capacity,
      latitude,
      longitude,
      street_address_id,
    } = body;

    // Validate required fields
    if (
      !owner_id ||
      !lot_name ||
      typeof capacity !== 'number' ||
      typeof latitude !== 'number' ||
      typeof longitude !== 'number' ||
      !street_address_id
    ) {
      return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 });
    }

    // Check if the owner exists
    const owner = await prisma.owner.findUnique({ where: { owner_id } });
    if (!owner) {
      return NextResponse.json({ error: 'Owner not found' }, { status: 404 });
    }

    // Step 1: Create the ParkingLot
    const newLot = await prisma.parkingLot.create({
      data: {
        owner_id,
        lot_name,
        capacity,
      },
    });

    // Step 2: Auto-create ParkingSpaces from 1 to capacity
    const generatedSpaces = Array.from({ length: capacity }, (_, i) => ({
      lot_id: newLot.lot_id,
      space_number: `${i + 1}`,
      is_handicap: false,
      status: 'available',
    }));

    await prisma.parkingSpace.createMany({
      data: generatedSpaces,
    });

    // Step 3: Create Location
    const location = await prisma.location.create({
      data: {
        lot_id: newLot.lot_id,
        latitude,
        longitude,
        street_address_id,
      },
    });

    return NextResponse.json(
      {
        success: true,
        lot_id: newLot.lot_id,
        total_spaces: capacity,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[CREATE_PARKING_LOT_ERROR]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
