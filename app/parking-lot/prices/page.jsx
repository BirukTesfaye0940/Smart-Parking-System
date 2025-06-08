'use client';
import { useState } from 'react';

export default function RegisterPrice() {
  const [lotId, setLotId] = useState('');
  const [pricePerHour, setPricePerHour] = useState('');
  const [effectiveDate, setEffectiveDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      lot_id: Number(lotId),
      price_per_hour: parseFloat(pricePerHour),
      effective_date: effectiveDate ? new Date(effectiveDate).toISOString() : undefined,
    };

    const res = await fetch('/api/prices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setMessage(result.success ? '✅ Price successfully registered!' : `❌ Error: ${result.error}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-10 border border-blue-200">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">📈 Register Parking Lot Price</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Parking Lot ID</label>
              <input
                type="number"
                value={lotId}
                onChange={(e) => setLotId(e.target.value)}
                placeholder="e.g., 3"
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Price Per Hour</label>
              <input
                type="number"
                step="0.01"
                value={pricePerHour}
                onChange={(e) => setPricePerHour(e.target.value)}
                placeholder="e.g., 12.5"
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none   text-gray-800"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Effective Date (optional)</label>
            <input
              type="datetime-local"
              value={effectiveDate}
              onChange={(e) => setEffectiveDate(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 transition rounded-xl font-semibold text-lg shadow-md"
          >
            💾 Register Price
          </button>
        </form>

        {message && (
          <div className="mt-6 text-center text-sm font-medium text-green-600 bg-green-100 border border-green-300 rounded-xl p-3">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
