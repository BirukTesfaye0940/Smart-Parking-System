'use client';
import { useState } from 'react';

export default function BookingPopup({ lot_id, availableSpaceIds = [] }) {
  const [spaceId, setSpaceId] = useState(availableSpaceIds[0] || '');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lot_id,
        space_id: Number(spaceId),
        start_time: startTime,
        end_time: endTime,
      }),
    });

    const result = await res.json();
    if (result.success) {
      setMessage('✅ Booking created successfully!');
      setTimeout(() => {
        setOpen(false);
        setMessage('');
        setSpaceId(availableSpaceIds[0] || '');
        setStartTime('');
        setEndTime('');
      }, 1500);
    } else {
      setMessage(`❌ ${result.error}`);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow"
      >
        🅱️ Book Parking Space
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Reserve Parking Space</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

              <label className="block text-gray-700 font-semibold text-black">Select Space:</label>
              <select
                value={spaceId}
                onChange={(e) => setSpaceId(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 text-black"
              >
                {availableSpaceIds.length === 0 ? (
                  <option disabled>No available spaces</option>
                ) : (
                  availableSpaceIds.map(id => (
                    <option key={id} value={id}>Space #{id}</option>
                  ))
                )}
              </select>

              <label className="block text-gray-700 font-semibold text-black">Start Time:</label>
              <input
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-3 text-black"
              />

              <label className="block text-gray-700 font-semibold text-black">End Time:</label>
              <input
                type="datetime-local"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-3 text-black"
              />

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray-500 hover:underline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold"
                >
                  Confirm Booking
                </button>
              </div>
            </form>

            {message && (
              <p className="mt-4 text-center text-sm font-medium text-green-600">{message}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
