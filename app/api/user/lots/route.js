
import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
  try {
    const lots = await prisma.parkingLot.findMany({
      include: {
        locations: {
          include: {
            streetAddress: {
              include: {
                subCity: {
                  include: {
                    city: true
                  }
                }
              }
            }
          }
        },
        prices: {
          orderBy: { effective_date: 'desc' },
          take: 1,
        },
        spaces: true,
        reviews: true,
      },
    });

    const enrichedLots = lots.map(lot => {
      const location = lot.locations[0];
      const street = location?.streetAddress;
      const subcity = street?.subCity;
      const city = subcity?.city;

      const availableSpaces = lot.spaces.filter(s => s.status === 'available');
      const avgRating = lot.reviews.length
        ? lot.reviews.reduce((sum, r) => sum + r.rating, 0) / lot.reviews.length
        : null;

      return {
        lot_id: lot.lot_id,
        lot_name: lot.lot_name,
        image: lot.image,
        address: street?.street_address || 'N/A',
        zip_code: street?.zip_code || 'N/A',
        subcity: subcity?.sub_city_name || 'N/A',
        city: city?.city_name || 'N/A',
        latitude: location?.latitude || null,
        longitude: location?.longitude || null,
        capacity: lot.capacity,
        available_spaces: availableSpaces.length,
        available_space_ids: availableSpaces.map(s => s.space_id),
        price_per_hour: lot.prices[0]?.price_per_hour || 0,
        average_rating: avgRating,


      };
    });

    return NextResponse.json(enrichedLots);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
