import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const filters = {
      search: searchParams.get("search") || "",
      city: searchParams.get("city") || "",
      subcity: searchParams.get("subcity") || "",
      minPrice: parseFloat(searchParams.get("minPrice")) || 0,
      maxPrice: parseFloat(searchParams.get("maxPrice")) || Infinity,
      minRating: parseFloat(searchParams.get("minRating")) || 0,
      onlyAvailable: searchParams.get("onlyAvailable") === "true",
    };

    const lots = await prisma.parkingLot.findMany({
      include: {
        locations: {
          include: {
            streetAddress: {
              include: {
                subCity: {
                  include: { city: true },
                },
              },
            },
          },
        },
        prices: {
          orderBy: { effective_date: "desc" },
          take: 1,
        },
        spaces: true,
        reviews: true,
      },
    });

    const enriched = lots
      .map((lot) => {
        const loc = lot.locations[0];
        const street = loc?.streetAddress;
        const subcity = street?.subCity;
        const city = subcity?.city;

        const availableSpaces = lot.spaces.filter((s) => s.status === "available");
        const avgRating = lot.reviews.length
          ? lot.reviews.reduce((sum, r) => sum + r.rating, 0) / lot.reviews.length
          : null;

        return {
          lot_id: lot.lot_id,
          lot_name: lot.lot_name,
          image: lot.image,
          address: street?.street_address || "",
          zip_code: street?.zip_code || "",
          subcity: subcity?.sub_city_name || "",
          city: city?.city_name || "",
          latitude: loc?.latitude || null,
          longitude: loc?.longitude || null,
          capacity: lot.capacity,
          available_spaces: availableSpaces.length,
          available_space_ids: availableSpaces.map((s) => s.space_id),
          price_per_hour: lot.prices[0]?.price_per_hour || 0,
          average_rating: avgRating,
        };
      })
      .filter((lot) => {
        return (
          (!filters.search ||
            lot.lot_name.toLowerCase().includes(filters.search.toLowerCase()) ||
            lot.address.toLowerCase().includes(filters.search.toLowerCase())) &&
          (!filters.city ||
            lot.city.toLowerCase().includes(filters.city.toLowerCase())) &&
          (!filters.subcity ||
            lot.subcity.toLowerCase().includes(filters.subcity.toLowerCase())) &&
          lot.price_per_hour >= filters.minPrice &&
          lot.price_per_hour <= filters.maxPrice &&
          (lot.average_rating ?? 0) >= filters.minRating &&
          (!filters.onlyAvailable || lot.available_spaces > 0)
        );
      });

    return NextResponse.json(enriched);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
