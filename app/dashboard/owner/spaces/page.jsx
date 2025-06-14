'use client';

import { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaParking, FaToggleOff, FaToggleOn } from 'react-icons/fa';

export default function AvailabilityPage() {
  const [spaces, setSpaces] = useState([]);

 useEffect(() => {
  fetch('/api/owner/space')
    .then(res => res.json())
    .then(data => {
      // Sort by lot_id and then space_number (converted to number)
      const sorted = [...data].sort((a, b) => {
        if (a.lot.lot_id === b.lot.lot_id) {
          return Number(a.space_number) - Number(b.space_number);
        }
        return a.lot.lot_id - b.lot.lot_id;
      });

      setSpaces(sorted);
    });
}, []);

  const toggleStatus = async (spaceId, currentStatus) => {
    const newStatus = currentStatus === 'available' ? 'unavailable' : 'available';

    const res = await fetch('/api/owner/space', {
      method: 'POST',
      body: JSON.stringify({ spaceId, newStatus }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      setSpaces(spaces =>
        spaces.map(s =>
          s.space_id === spaceId ? { ...s, availability: [{ status: newStatus }] } : s
        )
      );
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Manage Space Availability</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spaces.map(space => {
          const status = space.availability?.[0]?.status || 'unknown';
          const isAvailable = status === 'available';

          return (
            <div
              key={space.space_id}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 transition hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xl font-semibold text-gray-700">
                  <FaParking className="text-indigo-500" />
                  <span>Space #{space.space_number}</span>
                </div>
                <div className={`text-sm font-medium px-3 py-1 rounded-full ${isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {status}
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-3 gap-2">
                <FaMapMarkerAlt className="text-indigo-400" />
                <span>Lot: {space.lot?.lot_name}</span>
              </div>
              <button
                onClick={() => toggleStatus(space.space_id, status)}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl transition"
              >
                {isAvailable ? <FaToggleOff /> : <FaToggleOn />}
                <span>Toggle Status</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
