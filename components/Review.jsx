'use client';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function ReviewPopup({ lotId }) {
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, lot_id: lotId, rating, comment }),
    });
    const result = await res.json();
    if (result.success) {
      setMessage('✅ Review submitted!');
      setEmail('');
      setRating(0);
      setComment('');
      setTimeout(() => setOpen(false), 1000);
    } else {
      setMessage(`❌ ${result.error}`);
    }
  };

  return (
    <div className="relative bg-white p-4 rounded-lg shadow-md">
      <button
        onClick={() => setOpen(true)}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow"
      >
        ✍️ Write Review
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md">
            <h3 className="text-lg font-bold mb-4 text-gray-800 text-center">Rate this Parking Lot</h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={starValue}
                        onClick={() => setRating(starValue)}
                        className="hidden"
                      />
                      <FaStar
                        className={`cursor-pointer text-2xl ${
                          starValue <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>

              <textarea
                placeholder="Write your feedback..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full border p-2 rounded-lg focus:ring-2 ring-yellow-400 text-gray-800"
                rows={3}
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
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                >
                  Submit
                </button>
              </div>

              {message && (
                <div className="text-sm text-center mt-2 text-green-600">{message}</div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
