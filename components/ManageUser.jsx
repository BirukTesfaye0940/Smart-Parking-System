// 'use client';
// import { useEffect, useState } from 'react';
// import { FaToggleOff, FaToggleOn } from 'react-icons/fa';

// const ManageUsers = ({ role = 'admin' }) => {
//   const [users, setUsers] = useState([]);

//   const fetchData = async () => {
//     const res = await fetch(`/api/${role}/list`);
//     const data = await res.json();
//     setUsers(data);
//   };

//   const toggleStatus = async (user) => {
//   const id = user.id ?? user.user_id ?? user.owner_id;
//   const newStatus = user.status === 'active' ? 'inactive' : 'active';

//   try {
//     const res = await fetch(`/api/${role}/status`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ id, status: newStatus }),
//     });

//     const updated = await res.json();

//     if (res.ok) {
//       setUsers((prev) =>
//         prev.map((u) => {
//           const uid = u.id ?? u.user_id ?? u.owner_id;
//           if (uid === id) return updated;
//           return u;
//         })
//       );
//     } else {
//       console.error('Failed to update status:', updated.error);
//     }
//   } catch (error) {
//     console.error('Unexpected error:', error);
//   }
// };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="p-8 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 capitalize text-black">{role}s Management</h1>
//       <div className="overflow-x-auto rounded-lg shadow">
//         <table className="min-w-full bg-white text-sm">
//           <thead className="bg-gray-100 text-gray-700 uppercase text-left">
//             <tr>
//               <th className="px-6 py-3 text-gray-800">Full Name</th>
//               <th className="px-6 py-3 text-gray-800">Email</th>
//               <th className="px-6 py-3 text-gray-800">Phone</th>
//               <th className="px-6 py-3 text-gray-800">Status</th>
//               <th className="px-6 py-3 text-gray-800">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
//                   No data found
//                 </td>
//               </tr>
//             ) : (
//               users.map((user) => {
//                 const fullName = `${user.first_name} ${user.last_name}`;
//                 const statusColor = user.status === 'active' ? 'text-green-600' : 'text-red-600';
//                 const uniqueKey = user.id ?? user.user_id ?? user.owner_id;

//                 return (
//                   <tr key={uniqueKey} className="border-b hover:bg-gray-50 text-gray-800">
//                     <td className="px-6 py-4 font-medium text-gray-800">{fullName}</td>
//                     <td className="px-6 py-4 text-gray-800">{user.email}</td>
//                     <td className="px-6 py-4 text-gray-800">{user.phone}</td>
//                     <td className={`px-6 py-4 text-gray-800 font-semibold ${statusColor}`}>{user.status}</td>
//                     <td className="px-6 py-4">
//                       <button onClick={() => toggleStatus(user)}>
//                         {user.status === 'active' ? (
//                           <FaToggleOn className="text-green-500 text-2xl" />
//                         ) : (
//                           <FaToggleOff className="text-red-500 text-2xl" />
//                         )}
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageUsers;
'use client';
import { useEffect, useState } from 'react';
import { FaToggleOff, FaToggleOn, FaTrashAlt } from 'react-icons/fa';

const ManageUsers = ({ role = 'admin' }) => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`/api/${role}/list`);
    const data = await res.json();
    setUsers(data);
  };

  const toggleStatus = async (user) => {
    const id = user.id ?? user.user_id ?? user.owner_id;
    const isOwner = !!user.owner_id;
    const newStatus = user.status === 'active' ? 'inactive' : 'active';
  
    try {
      const res = await fetch(`/api/${role}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
  
      const updated = await res.json();
  
      if (res.ok) {
        setUsers((prev) =>
          prev.map((u) => {
            const uid = u.id ?? u.user_id ?? u.owner_id;
            if (uid === id) return updated;
            return u;
          })
        );
  
        // ✅ Send notification *only if activated*
        if (newStatus === 'active') {
          const notifPayload = {
            message: `🎉 Your account has been activated! You can now access the Smart Parking System.`,
            user_id: !isOwner ? id : null,
            owner_id: isOwner ? id : null,
          };
  
          await fetch('/api/notifications', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(notifPayload),
          });
        }
      } else {
        console.error('Failed to update status:', updated.error);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };
  

  const handleDelete = async (user) => {
    const id = user.id ?? user.user_id ?? user.owner_id;

    if (!confirm(`Are you sure you want to delete ${user.first_name} ${user.last_name}?`)) return;

    try {
      const res = await fetch(`/api/delete/${role}/${id}`, { method: 'DELETE' });

      if (res.ok) {
        setUsers((prev) => prev.filter((u) => (u.id ?? u.user_id ?? u.owner_id) !== id));
      } else {
        const errorData = await res.json();
        console.error('Failed to delete:', errorData.error);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 capitalize text-black">{role}s Management</h1>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase text-left">
            <tr>
              <th className="px-6 py-3 text-gray-800">Full Name</th>
              <th className="px-6 py-3 text-gray-800">Email</th>
              <th className="px-6 py-3 text-gray-800">Phone</th>
              <th className="px-6 py-3 text-gray-800">Status</th>
              <th className="px-6 py-3 text-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No data found
                </td>
              </tr>
            ) : (
              users.map((user) => {
                const fullName = `${user.first_name} ${user.last_name}`;
                const statusColor = user.status === 'active' ? 'text-green-600' : 'text-red-600';
                const uniqueKey = user.id ?? user.user_id ?? user.owner_id;

                return (
                  <tr key={uniqueKey} className="border-b hover:bg-gray-50 text-gray-800">
                    <td className="px-6 py-4 font-medium">{fullName}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.phone}</td>
                    <td className={`px-6 py-4 font-semibold ${statusColor}`}>{user.status}</td>
                    <td className="px-6 py-4 flex items-center gap-4">
                      <button onClick={() => toggleStatus(user)}>
                        {user.status === 'active' ? (
                          <FaToggleOn className="text-green-500 text-2xl" />
                        ) : (
                          <FaToggleOff className="text-red-500 text-2xl" />
                        )}
                      </button>
                      <button onClick={() => handleDelete(user)} className="text-red-600 hover:text-red-800">
                        <FaTrashAlt className="text-xl" />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
