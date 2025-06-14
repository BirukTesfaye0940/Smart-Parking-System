// page.jsx
import dynamic from 'next/dynamic';

export default function Page({ searchParams }) {
  const role ='user';
  const DynamicManage = dynamic(() => import('../../../../components/ManageUser'));
  return <DynamicManage role={role} />;
}
