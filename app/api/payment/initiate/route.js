import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // 1. Get unpaid booking with lot and space relations
    console.log('Fetching unpaid booking for user:', user.user_id);
    const booking = await prisma.booking.findFirst({
      where: {
        user_id: user.user_id,
        status: 'unpaid'
      },
      include: {
        lot: true,
        space: true
      }
    });
    console.log('Found booking:', booking);

    if (!booking) {
      return NextResponse.json({ message: 'No unpaid booking found' }, { status: 404 });
    }

    // 2. Calculate total hours
    const hours = Math.ceil((new Date(booking.end_time) - new Date(booking.start_time)) / (1000 * 60 * 60));
    console.log('Calculated hours:', hours);

    // 3. Fetch the most recent price_per_hour for the lot
    const priceRecord = await prisma.price.findFirst({
      where: {
        lot_id: booking.lot_id,
      },
      orderBy: {
        effective_date: 'desc',
      },
    });

    const pricePerHour = priceRecord.price_per_hour;
    console.log('Price per hour:', pricePerHour);

    // 4. Calculate total amount
    const amount = pricePerHour * hours;
    console.log('Calculated amount:', amount);

    // 5. Generate transaction reference
    const txRef = `booking-${booking.booking_id}-${Date.now()}`;
    console.log('Generated tx_ref:', txRef);

    // 6. Initialize payment on Chapa
    const chapaRes = await fetch('https://api.chapa.co/v1/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CHAPA_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency: 'ETB',
        email: session.user.email,
        tx_ref: txRef,
        callback_url: process.env.CHAPA_CALLBACK_URL,
        return_url: `http://localhost:3000/payment-success?tx_ref=${txRef}`,
        customization: {
          title: 'Parking Payment',
          description: `Booking for space ETB`,
        },
      }),
    });

    const data = await chapaRes.json();
    console.log('DATA', data);

    if (data.status !== 'success') {
      return NextResponse.json({ message: 'Chapa initialization failed', data }, { status: 500 });
    }

    return NextResponse.json({ link: data.data.checkout_url });

  } catch (err) {
    console.error('[CHAPA_INITIATE_ERROR]', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}


// import { getServerSession } from "next-auth";
// import { NextResponse } from "next/server";
// import prisma from "../../../../lib/prisma";
// import { authOptions } from "../../auth/[...nextauth]/route";

// export async function POST(req) {
//   try {
//     const session = await getServerSession(authOptions);
//     if (!session?.user?.email) {
//       return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
//     }

//     const user = await prisma.user.findUnique({
//       where: { email: session.user.email }
//     });

//     if (!user) {
//       return NextResponse.json({ message: 'User not found' }, { status: 404 });
//     }

//     // 1. Get unpaid booking
//     console.log('Fetching unpaid booking for user:', user.user_id);
//     const booking = await prisma.booking.findFirst({
//       where: {
//         user_id: user.user_id,
//         status: 'unpaid'
//       },
//       include: {
//         lot: true,
//         space: true
//       }
//     });
//     console.log('Found booking:', booking);

//     if (!booking) {
//       return NextResponse.json({ message: 'No unpaid booking found' }, { status: 404 });
//     }

//     // 2. Calculate total amount
//     const hours = Math.ceil((new Date(booking.end_time) - new Date(booking.start_time)) / (1000 * 60 * 60));
//     console.log('Calculated hours:', hours);
//     console.log('Price per hour:', booking.lot.price_per_hour);

//      const amount = booking.lot.price_per_hour * hours;
   
//     console.log('Calculated amount:', amount);

//     // 3. Create Chapa tx_ref
//     const txRef = `booking-${booking.booking_id}-${Date.now()}`;
//     console.log('Generated tx_ref:', txRef);


//     const chapaRes = await fetch('https://api.chapa.co/v1/transaction/initialize', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${process.env.CHAPA_SECRET_KEY}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         amount,
//         currency: 'ETB',
//         email: session.user.email,
//         tx_ref: txRef,
//         callback_url: process.env.CHAPA_CALLBACK_URL,
//         return_url: `http://localhost:3000/payment-success?tx_ref=${txRef}`,
//         customization: {
//   title: 'Parking Payment',
//   description: 'Booking for space 1 - 3 hours - 15 ETB'
// }

//       })
//     });

//     const data = await chaptRes.json();
//     console.log('DATA',data)

//     if (data.status !== 'success') {
//       return NextResponse.json({ message: 'Chapa initialization failed', data }, { status: 500 });
//     }

//     return NextResponse.json({ link: data.data.checkout_url });

//   } catch (err) {
//     console.error('[CHAPA_INITIATE_ERROR]', err);
//     return NextResponse.json({ message: 'Server error' }, { status: 500 });
//   }
// }
