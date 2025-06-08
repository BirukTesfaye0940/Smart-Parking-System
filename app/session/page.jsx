'use client';

import { useSession } from 'next-auth/react';

export default function DashboardHeader() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div>
      <p>Welcome: {session.user.email}</p>
      <p>Role: {session.user.role}</p>
      <p>User ID: {session.user.id}</p>
    </div>
  );
}
