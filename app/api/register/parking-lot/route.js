import { NextResponse } from 'next/server';
import { uploadToCloudinary } from '../../../../lib/cloudinary'; // adjust the path as needed
import prisma from '../../../../lib/prisma';

export async function POST(req) {
  try {
    const formData = await req.formData();

    const owner_id = Number(formData.get('owner_id'));
    const lot_name = formData.get('lot_name');
    const capacity = Number(formData.get('capacity'));
    const latitude = Number(formData.get('latitude'));
    const longitude = Number(formData.get('longitude'));
    const street_address_id = formData.get('street_address_id');
    const imageFile = formData.get('image');

    // Validate required fields
    if (
      !owner_id ||
      !lot_name ||
      isNaN(capacity) ||
      isNaN(latitude) ||
      isNaN(longitude) ||
      !street_address_id
    ) {
      return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 });
    }

    // Image validation
    if (!imageFile || typeof imageFile === 'string') {
      console.error("❌ No image file provided or invalid type!");
      return NextResponse.json({ error: "Image is required for parking lot registration" }, { status: 400 });
    }

    const imageUrl = await uploadToCloudinary(imageFile);
    if (!imageUrl) {
      console.error("❌ Image upload failed!");
      return NextResponse.json({ error: "Image upload failed" }, { status: 500 });
    }

    // Check if the owner exists
    const owner = await prisma.owner.findUnique({ where: { owner_id } });
    if (!owner) {
      return NextResponse.json({ error: 'Owner not found' }, { status: 404 });
    }

    // Step 1: Create the ParkingLot with image
    const newLot = await prisma.parkingLot.create({
      data: {
        owner_id,
        lot_name,
        image: imageUrl,
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
    await prisma.location.create({
      data: {
        lot_id: newLot.lot_id,
        latitude,
        longitude,
        street_address_id:Number(street_address_id),
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
