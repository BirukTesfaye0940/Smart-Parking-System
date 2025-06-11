'use client';

import { useEffect, useState } from 'react';

export default function OwnerBookingsTable() {
  const [lot, setLot] = useState(null);

  useEffect(() => {
    fetch('/api/owner/booking')
      .then((res) => res.json())
      .then((data) => {
        if (data?.lot) {
          setLot(data.lot);
        }
      });
  }, []);

  const bookings = lot?.booking || [];
  const lotName = lot?.lot_name || '—';
  const pricePerHour = lot?.prices?.[0]?.price_per_hour || '—';
  const location = lot?.locations?.[0];

  return (
    <div className="p-6 space-y-6 bg-white text-gray-900">
      <div className="bg-gray-50 p-4 rounded shadow border">
        <h2 className="text-2xl font-bold mb-2">Lot Info</h2>
        <p><span className="font-semibold">Name:</span> {lotName}</p>
        <p><span className="font-semibold">Price per hour:</span> ${pricePerHour}</p>
        {location && (
          <p>
            <span className="font-semibold">Location:</span>{' '}
            Lat: {location.latitude}, Lng: {location.longitude}
          </p>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Your Lot Bookings</h2>
        {bookings.length === 0 ? (
          <p className="text-gray-600">No bookings found for this lot.</p>
        ) : (
          <div className="overflow-x-auto border rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-200 text-gray-900">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Booking ID</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">User</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Space #</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Start Time</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">End Time</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {bookings.map((booking) => (
                  <tr key={booking.booking_id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 text-sm">{booking.booking_id}</td>
                    <td className="px-4 py-2 text-sm">{booking.user?.name ?? '—'}</td>
                    <td className="px-4 py-2 text-sm">{booking.user?.email ?? '—'}</td>
                    <td className="px-4 py-2 text-sm">{booking.space?.space_number ?? '—'}</td>
                    <td className="px-4 py-2 text-sm">
                      {new Date(booking.start_time).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 text-sm">
                      {new Date(booking.end_time).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 text-sm capitalize">{booking.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
