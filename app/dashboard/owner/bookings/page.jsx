'use client';

import { useEffect, useState } from 'react';
import Loader from '../../../../components/Loader/Loader'; // Adjust path if needed

export default function OwnerBookingsTable() {
  const [lot, setLot] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchLot = async () => {
    try {
      const res = await fetch('/api/owner/booking');
      const data = await res.json();
      if (data?.lot) setLot(data.lot);
    } catch (err) {
      console.error('Failed to fetch lot:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLot();
  }, []);

  const handleDeleteBooking = async (bookingId) => {
    if (!confirm('Are you sure you want to delete this booking?')) return;

    const res = await fetch(`/api/booking/${bookingId}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      setLot((prev) => ({
        ...prev,
        booking: prev.booking.filter((b) => b.booking_id !== bookingId),
      }));
    } else {
      alert('Failed to delete booking');
    }
  };

  const handleDeleteParkingLot = async () => {
    if (!confirm('Are you sure you want to delete this parking lot?')) return;

    const res = await fetch(`/api/parking-lot/${lot.lot_id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      setLot(null);
      alert('Parking lot deleted successfully.');
    } else {
      alert('Failed to delete parking lot');
    }
  };

  const bookings = lot?.booking || [];
  const lotName = lot?.lot_name || '—';
  const pricePerHour = lot?.prices?.[0]?.price_per_hour || '—';
  const location = lot?.locations?.[0];

  return (
    <div className="p-6 space-y-6 bg-white text-gray-900">
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <Loader />
        </div>
      ) : (
        <>
          {lot && (
            <div className="bg-gray-50 p-4 rounded shadow border">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mb-2">Lot Info</h2>
                <button
                  onClick={handleDeleteParkingLot}
                  className="text-sm bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                >
                  Delete Lot
                </button>
              </div>
              <p><span className="font-semibold">Name:</span> {lotName}</p>
              <p><span className="font-semibold">Price per hour:</span> ${pricePerHour}</p>
              {location && (
                <p>
                  <span className="font-semibold">Location:</span>{' '}
                  Lat: {location.latitude}, Lng: {location.longitude}
                </p>
              )}
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold mb-4">Your Lot Bookings</h2>
            {bookings.length === 0 ? (
              <p className="text-gray-600">No bookings found for this lot.</p>
            ) : (
              <div className="overflow-x-auto border rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-200 text-gray-900">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Booking ID</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">User</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Space #</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Start Time</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">End Time</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {bookings.map((booking) => (
                      <tr key={booking.booking_id} className="hover:bg-gray-100">
                        <td className="px-4 py-2 text-sm">{booking.booking_id}</td>
                        <td className="px-4 py-2 text-sm">{booking.user?.name ?? '—'}</td>
                        <td className="px-4 py-2 text-sm">{booking.user?.email ?? '—'}</td>
                        <td className="px-4 py-2 text-sm">{booking.space?.space_number ?? '—'}</td>
                        <td className="px-4 py-2 text-sm">
                          {new Date(booking.start_time).toLocaleString()}
                        </td>
                        <td className="px-4 py-2 text-sm">
                          {new Date(booking.end_time).toLocaleString()}
                        </td>
                        <td className="px-4 py-2 text-sm capitalize">{booking.status}</td>
                        <td className="px-4 py-2 text-sm">
                          <button
                            onClick={() => handleDeleteBooking(booking.booking_id)}
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}


// // 'use client';

// // import { useEffect, useState } from 'react';

// // export default function OwnerBookingsTable() {
// //   const [lot, setLot] = useState(null);

// //   useEffect(() => {
// //     fetch('/api/owner/booking')
// //       .then((res) => res.json())
// //       .then((data) => {
// //         if (data?.lot) {
// //           setLot(data.lot);
// //         }
// //       });
// //   }, []);

// //   const bookings = lot?.booking || [];
// //   const lotName = lot?.lot_name || '—';
// //   const pricePerHour = lot?.prices?.[0]?.price_per_hour || '—';
// //   const location = lot?.locations?.[0];

// //   return (
// //     <div className="p-6 space-y-6 bg-white text-gray-900">
// //       <div className="bg-gray-50 p-4 rounded shadow border">
// //         <h2 className="text-2xl font-bold mb-2">Lot Info</h2>
// //         <p><span className="font-semibold">Name:</span> {lotName}</p>
// //         <p><span className="font-semibold">Price per hour:</span> ${pricePerHour}</p>
// //         {location && (
// //           <p>
// //             <span className="font-semibold">Location:</span>{' '}
// //             Lat: {location.latitude}, Lng: {location.longitude}
// //           </p>
// //         )}
// //       </div>

// //       <div>
// //         <h2 className="text-2xl font-bold mb-4">Your Lot Bookings</h2>
// //         {bookings.length === 0 ? (
// //           <p className="text-gray-600">No bookings found for this lot.</p>
// //         ) : (
// //           <div className="overflow-x-auto border rounded-lg shadow">
// //             <table className="min-w-full divide-y divide-gray-300">
// //               <thead className="bg-gray-200 text-gray-900">
// //                 <tr>
// //                   <th className="px-4 py-3 text-left text-sm font-semibold">Booking ID</th>
// //                   <th className="px-4 py-3 text-left text-sm font-semibold">User</th>
// //                   <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
// //                   <th className="px-4 py-3 text-left text-sm font-semibold">Space #</th>
// //                   <th className="px-4 py-3 text-left text-sm font-semibold">Start Time</th>
// //                   <th className="px-4 py-3 text-left text-sm font-semibold">End Time</th>
// //                   <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-gray-200 bg-white">
// //                 {bookings.map((booking) => (
// //                   <tr key={booking.booking_id} className="hover:bg-gray-100">
// //                     <td className="px-4 py-2 text-sm">{booking.booking_id}</td>
// //                     <td className="px-4 py-2 text-sm">{booking.user?.name ?? '—'}</td>
// //                     <td className="px-4 py-2 text-sm">{booking.user?.email ?? '—'}</td>
// //                     <td className="px-4 py-2 text-sm">{booking.space?.space_number ?? '—'}</td>
// //                     <td className="px-4 py-2 text-sm">
// //                       {new Date(booking.start_time).toLocaleString()}
// //                     </td>
// //                     <td className="px-4 py-2 text-sm">
// //                       {new Date(booking.end_time).toLocaleString()}
// //                     </td>
// //                     <td className="px-4 py-2 text-sm capitalize">{booking.status}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';

// import { useEffect, useState } from 'react';
// import { set } from 'react-datepicker/dist/date_utils';

// export default function OwnerBookingsTable() {
//   const [lot, setLot] = useState(null);
//   const [loading,setLoading]=useState(true)

//   const fetchLot = async () => {

//     const res = await fetch('/api/owner/booking');
//     const data = await res.json();
//     setLoading(false)
//     if (data?.lot) setLot(data.lot);
    
//   };

//   useEffect(() => {
//     fetchLot();
//   }, []);

//   const handleDeleteBooking = async (bookingId) => {
//     if (!confirm('Are you sure you want to delete this booking?')) return;

//     const res = await fetch(`/api/booking/${bookingId}`, {
//       method: 'DELETE',
//     });

//     if (res.ok) {
//       setLot((prev) => ({
//         ...prev,
//         booking: prev.booking.filter((b) => b.booking_id !== bookingId),
//       }));
//     } else {
//       alert('Failed to delete booking');
//     }
//   };

//   const handleDeleteParkingLot = async () => {
//     if (!confirm('Are you sure you want to delete this parking lot?')) return;

//     const res = await fetch(`/api/parking-lot/${lot.lot_id}`, {
//       method: 'DELETE',
//     });

//     if (res.ok) {
//       setLot(null);
//       alert('Parking lot deleted successfully.');
//     } else {
//       alert('Failed to delete parking lot');
//     }
//   };

//   const bookings = lot?.booking || [];
//   const lotName = lot?.lot_name || '—';
//   const pricePerHour = lot?.prices?.[0]?.price_per_hour || '—';
//   const location = lot?.locations?.[0];

//   return (
//     <div className="p-6 space-y-6 bg-white text-gray-900">
//       {lot && (
//         <div className="bg-gray-50 p-4 rounded shadow border">
//           <div className="flex justify-between items-center">
//             <h2 className="text-2xl font-bold mb-2">Lot Info</h2>
//             <button
//               onClick={handleDeleteParkingLot}
//               className="text-sm bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
//             >
//               Delete Lot
//             </button>
//           </div>
//           <p><span className="font-semibold">Name:</span> {lotName}</p>
//           <p><span className="font-semibold">Price per hour:</span> ${pricePerHour}</p>
//           {location && (
//             <p>
//               <span className="font-semibold">Location:</span>{' '}
//               Lat: {location.latitude}, Lng: {location.longitude}
//             </p>
//           )}
//         </div>
//       )}

//       <div>
//         <h2 className="text-2xl font-bold mb-4">Your Lot Bookings</h2>
//         {bookings.length === 0 ? (
//           <p className="text-gray-600">No bookings found for this lot.</p>
//         ) : (
//           <div className="overflow-x-auto border rounded-lg shadow">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead className="bg-gray-200 text-gray-900">
//                 <tr>
//                   <th className="px-4 py-3 text-left text-sm font-semibold">Booking ID</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold">User</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold">Space #</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold">Start Time</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold">End Time</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
//                   <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200 bg-white">
//                 {bookings.map((booking) => (
//                   <tr key={booking.booking_id} className="hover:bg-gray-100">
//                     <td className="px-4 py-2 text-sm">{booking.booking_id}</td>
//                     <td className="px-4 py-2 text-sm">{booking.user?.name ?? '—'}</td>
//                     <td className="px-4 py-2 text-sm">{booking.user?.email ?? '—'}</td>
//                     <td className="px-4 py-2 text-sm">{booking.space?.space_number ?? '—'}</td>
//                     <td className="px-4 py-2 text-sm">
//                       {new Date(booking.start_time).toLocaleString()}
//                     </td>
//                     <td className="px-4 py-2 text-sm">
//                       {new Date(booking.end_time).toLocaleString()}
//                     </td>
//                     <td className="px-4 py-2 text-sm capitalize">{booking.status}</td>
//                     <td className="px-4 py-2 text-sm">
//                       <button
//                         onClick={() => handleDeleteBooking(booking.booking_id)}
//                         className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
