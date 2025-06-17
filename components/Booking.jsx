'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BookingPopup({ lot_id, availableSpaceIds = [] }) {
  const [spaceId, setSpaceId] = useState(availableSpaceIds[0] || '');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
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
        setStartTime(null);
        setEndTime(null);
      }, 1500);
    } else {
      setMessage(`❌ ${result.error}`);
    }
  };

  return (
    <div className="relative ">
      <button
        onClick={() => setOpen(true)}
        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-600 text-white font-semibold px-4 py-3 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-xs w-full"
        >
        🅱️ Book a space
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Reserve Parking Space</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

              <label className="block text-gray-700 font-semibold">Select Space:</label>
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

              <label className="block text-gray-700 font-semibold">Start Time:</label>
              <DatePicker
                selected={startTime}
                onChange={(date) => setStartTime(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="yyyy-MM-dd HH:mm"
                className="w-full border border-gray-300 rounded-lg p-3 text-black"
                placeholderText="Select start time"
                required
              />

              <label className="block text-gray-700 font-semibold">End Time:</label>
              <DatePicker
                selected={endTime}
                onChange={(date) => setEndTime(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="yyyy-MM-dd HH:mm"
                className="w-full border border-gray-300 rounded-lg p-3 text-black"
                placeholderText="Select end time"
                required
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
