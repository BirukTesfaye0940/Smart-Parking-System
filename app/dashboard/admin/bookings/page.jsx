'use client';

import { useEffect, useState } from 'react';

export default function OwnerBookingsTable() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('/api/owner/booking')
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Lot Bookings</h2>
      <div className="overflow-x-auto border rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Booking ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">User</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Lot</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Space #</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Start Time</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">End Time</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {bookings.map((booking) => (
              <tr key={booking.booking_id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm">{booking.booking_id}</td>
                <td className="px-4 py-2 text-sm">{booking.user.name}</td>
                <td className="px-4 py-2 text-sm">{booking.user.email}</td>
                <td className="px-4 py-2 text-sm">{booking.lot.name}</td>
                <td className="px-4 py-2 text-sm">{booking.space.space_number}</td>
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
    </div>
  );
}
