'use client';
import { useState } from 'react';

export default function NotificationPopup() {
  const [userId, setUserId] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message || (!userId && !ownerId)) {
      setStatusMsg('⚠️ Message and either User ID or Owner ID required');
      return;
    }

    const payload = {
      message,
      user_id: userId ? Number(userId) : null,
      owner_id: ownerId ? Number(ownerId) : null,
    };

    const res = await fetch('/api/notifications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      setStatusMsg('✅ Notification sent!');
      setUserId('');
      setOwnerId('');
      setMessage('');
      setTimeout(() => setOpen(false), 1500);
    } else {
      setStatusMsg(`❌ ${data.error || 'Failed to send'}`);
    }
  };

  return (
    <div className="relative">
      {/* <button
        onClick={() => setOpen(true)}
        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg shadow"
      >
        🔔 Send Notification
      </button> */}

      
        <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Send Notification</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
            
              <input
                type="number"
                placeholder="Owner ID (optional)"
                value={ownerId}
                onChange={(e) => setOwnerId(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400   text-gray-800"
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none text-gray-800"
              />

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray-500 hover:underline text-purple-600"
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
      
    </div>
  );
}
