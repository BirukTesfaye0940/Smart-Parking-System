'use client';
import { useEffect, useState } from 'react';

export default function NotificationViewer({ userId, ownerId }) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const query = userId
        ? `?user_id=${userId}`
        : ownerId
        ? `?owner_id=${ownerId}`
        : '';

      const res = await fetch(`/api/notifications${query}`);
      const data = await res.json();

      if (res.ok) {
        setNotifications(data.notifications || []);
      } else {
        console.error('Failed to fetch notifications:', data.error);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId || ownerId) fetchNotifications();
  }, [userId, ownerId]);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">📢 Notifications</h2>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : notifications.length === 0 ? (
        <p className="text-gray-500">No notifications yet.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notif) => (
            <li
              key={notif.notification_id}
              className="bg-purple-100 border border-purple-300 rounded-xl p-4 shadow"
            >
              <p className="text-gray-800">{notif.message}</p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(notif.sent_at).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
