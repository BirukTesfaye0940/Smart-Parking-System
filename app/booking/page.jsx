'use client';
import { useState } from 'react';

export default function BookingPopup() {
  const [email, setEmail] = useState('');
  const [spaceId, setSpaceId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        space_id: Number(spaceId),
        start_time: startTime,
        end_time: endTime,
      }),
    });

    const result = await res.json();
    if (result.success) {
      setMessage('✅ Booking created successfully!');
      setEmail('');
      setSpaceId('');
      setStartTime('');
      setEndTime('');
      setTimeout(() => setOpen(false), 1500);
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
        <div className="fixed inset-0 b bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Reserve Parking Space</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
              />
              <input
                type="number"
                placeholder="Space ID"
                value={spaceId}
                onChange={(e) => setSpaceId(e.target.value)}
                required
                min={1}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
              />
              <label className="block text-gray-700 font-semibold">Start Time:</label>
              <input
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
              />
              <label className="block text-gray-700 font-semibold">End Time:</label>
              <input
                type="datetime-local"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
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
