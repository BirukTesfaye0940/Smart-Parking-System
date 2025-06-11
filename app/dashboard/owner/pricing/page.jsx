'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaMoneyBillWave } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';

export default function PriceUpdateCard() {
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState('');

  const handleUpdate = async e => {
    e.preventDefault();

    if (!date) {
      setStatus('Please select a valid date.');
      return;
    }

    const res = await fetch('/api/owner/price', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        price_per_hour: parseFloat(price),
        effective_date: date.toISOString(),
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus('Price updated successfully!');
    } else {
      setStatus(data.error || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-100 rounded-xl shadow-md p-6 space-y-4 border border-gray-200">

        <form onSubmit={handleUpdate} className="space-y-3">
          <div>
            <label className="block text-sm text-gray-700 font-medium mb-1">
              <FaMoneyBillWave className="inline mr-1" />
              Price Per Hour
            </label>
            <input
              type="number"
              min="0"
              step="0.01"
              required
              value={price}
              onChange={e => setPrice(e.target.value)}
              className="w-full px-3 py-2 rounded-md border bg-white text-gray-900 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 font-medium mb-1">
              <MdAccessTime className="inline mr-1" />
              Effective Date
            </label>
            <DatePicker
              selected={date}
              onChange={date => setDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full px-3 py-2 rounded-md border bg-white text-gray-900 focus:ring-indigo-500 focus:outline-none"
              placeholderText="Select date and time"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow-sm transition-all duration-300"
          >
            Update Price
          </button>
        </form>

        {status && (
          <p className="text-sm mt-2 text-center text-green-600">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
