'use client';

import { useEffect, useState } from 'react';

export default function NotificationPopup() {
  const [owners, setOwners] = useState([]);
  const [ownerId, setOwnerId] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  useEffect(() => {
    const fetchOwners = async () => {
      try {
        const res = await fetch('/api/owner/list');
        const data = await res.json();
        console.log('Fetched owners:', data);

        if (res.ok) {
          setOwners(data);
        } else {
          console.error('Failed to fetch owners:', data.error);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    fetchOwners();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message || !ownerId) {
      setStatusMsg('⚠️ Message and Owner selection required');
      return;
    }

    const payload = {
      message,
      owner_id: Number(ownerId),
    };

    try {
      const res = await fetch('/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatusMsg('✅ Notification sent!');
        setOwnerId('');
        setMessage('');
        setTimeout(() => setOpen(false), 1500);
      } else {
        setStatusMsg(`❌ ${data.error || 'Failed to send'}`);
      }
    } catch (err) {
      setStatusMsg('❌ Server error occurred');
      console.error('Notification send failed:', err);
    }
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow"
      >
        🔔 Send Notification
      </button>

      {/* Modal Popup */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Send Notification</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Owner Dropdown */}
              <select
                value={ownerId}
                onChange={(e) => setOwnerId(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800"
              >
                <option value="">Select an owner</option>
                {owners.map((owner) => (
                  <option key={owner.owner_id} value={owner.owner_id}>
                    {owner.first_name} {owner.last_name}
                  </option>
                ))}
              </select>

              {/* Message Input */}
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none text-gray-800"
              />

              {/* Action Buttons */}
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-sm text-purple-600 hover:underline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold"
                >
                  Send
                </button>
              </div>
            </form>

            {statusMsg && (
              <p className="mt-4 text-center text-sm font-medium text-purple-600">{statusMsg}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
