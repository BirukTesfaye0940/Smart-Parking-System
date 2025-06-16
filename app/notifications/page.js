
import NotificationViewer from '../../components/NotificationPopup';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function OwnerNotificationsPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'owner') {
    return redirect('/login'); // Redirect if not authenticated or not an owner
  }

  const ownerId = session.user.id;

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <NotificationViewer ownerId={ownerId} />
    </main>
  );
}
