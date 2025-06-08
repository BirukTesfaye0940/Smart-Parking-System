'use client';
import { useState } from 'react';

export default function AvailabilityLogPopup() {
  const [open, setOpen] = useState(false);
  const [spaceId, setSpaceId] = useState('');
  const [status, setStatus] = useState('available');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/availability', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        space_id: Number(spaceId),
        status,
      }),
    });

    const data = await res.json();
    if (data.success) {
      setMsg('✅ Log created');
      setTimeout(() => setOpen(false), 1200);
    } else {
      setMsg(`❌ ${data.error}`);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(true)}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
      >
        + Log Availability
      </button>

      {open && (
        <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-5 text-black">Log Availability</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="number"
                placeholder="Parking Space ID"
                value={spaceId}
                onChange={(e) => setSpaceId(e.target.value)}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
                required
              />
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
              >
                <option value="available">Available</option>
                <option value="occupied">Occupied</option>
                <option value="maintenance">Maintenance</option>
              </select>

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
                  className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
                >
                  Log Status
                </button>
              </div>
            </form>
            {msg && <p className="text-center mt-4 text-sm text-indigo-600">{msg}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
