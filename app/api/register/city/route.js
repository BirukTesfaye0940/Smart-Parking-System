import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function POST(req) {
  try {
    const { city_name, state, subCities } = await req.json();

    if (!city_name || !state || !Array.isArray(subCities)) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    // 1. Get or create city
    let city = await prisma.city.findFirst({
      where: { city_name, state },
    });

    if (!city) {
      city = await prisma.city.create({
        data: { city_name, state },
      });
    }

    const results = [];

    for (const sub of subCities) {
      // 2. Get or create sub-city under that city
      let subCity = await prisma.subCity.findFirst({
        where: {
          city_id: city.city_id,
          sub_city_name: sub.sub_city_name,
        },
      });

      if (!subCity) {
        subCity = await prisma.subCity.create({
          data: {
            city_id: city.city_id,
            sub_city_name: sub.sub_city_name,
          },
        });
      }

      const addedAddresses = [];

      for (const addr of sub.addresses) {
        // 3. Check if street address already exists
        const existingAddress = await prisma.streetAddress.findFirst({
          where: {
            sub_city_id: subCity.sub_city_id,
            street_address: addr.street_address,
            zip_code: addr.zip_code,
          },
        });

        if (!existingAddress) {
          const createdAddress = await prisma.streetAddress.create({
            data: {
              sub_city_id: subCity.sub_city_id,
              street_address: addr.street_address,
              zip_code: addr.zip_code,
            },
          });
          addedAddresses.push(createdAddress);
        }
      }

      results.push({
        sub_city: subCity,
        addresses_added: addedAddresses,
      });
    }

    return NextResponse.json(
      {
        success: true,
        city,
        subCities: results,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('[REGISTER_CITY_STRUCTURE]', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
