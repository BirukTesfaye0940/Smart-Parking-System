
'use client';

import { useEffect, useState } from 'react';
import { FaCar, FaCity, FaMapMarkerAlt, FaMoneyBillWave, FaStar } from 'react-icons/fa';
import { MdLocationCity } from 'react-icons/md';
import BookingPopup from '../../components/Booking';
import ReviewPopup from '../../components/Review';

export default function ParkingLotsList() {
  const [lots, setLots] = useState([]);

  useEffect(() => {
    fetch('/api/user/lots')
      .then(res => res.json())
      .then(setLots)
      .catch(err => console.error('Failed to load lots:', err));
  }, []);

  return (
    <div className="min-h-screen bg-white py-10 px-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Parking Lots</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {lots.map(lot => (
          <div
            key={lot.lot_id}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-indigo-500" />
              {lot.lot_name}
            </h2>

            <div className="text-gray-700 space-y-1 text-sm">
              <p className="flex items-center gap-2">
                <MdLocationCity className="text-gray-500" />
                City: <span className="font-medium">{lot.city}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaCity className="text-gray-500" />
                Subcity: <span className="font-medium">{lot.subcity}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-500" />
                Address: <span className="font-medium">{lot.address}, {lot.zip_code}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaCar className="text-gray-500" />
                Available Spaces: <span className="font-medium">{lot.available_spaces} / {lot.capacity}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaMoneyBillWave className="text-green-500" />
                Price/hr: <span className="font-medium text-green-600">${lot.price_per_hour.toFixed(2)}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                Rating: <span className="font-medium">{lot.average_rating ? lot.average_rating.toFixed(1) : 'No reviews yet'}</span>
              </p>
            </div>

            <div className="mt-4 flex justify-between items-center gap-3">
              <ReviewPopup lotId={lot.lot_id} />
              {lot.available_spaces > 0 && lot.available_space_ids?.length > 0 ? (
                <BookingPopup
                  lot_id={lot.lot_id}
                  availableSpaceIds={lot.available_space_ids}
                />
              ) : (
                <p className="text-sm text-red-500 font-semibold">🚫 Fully Booked</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}













// 'use client';

// import { useEffect, useState } from 'react';
// import { FaCar, FaCity, FaMapMarkerAlt, FaMoneyBillWave, FaStar } from 'react-icons/fa';
// import { MdLocationCity } from 'react-icons/md';

// export default function ParkingLotsList() {
//   const [lots, setLots] = useState([]);

//   useEffect(() => {
//     fetch('/api/user/lots')
//       .then(res => res.json())
//       .then(setLots)
//       .catch(err => console.error('Failed to load lots:', err));
//   }, []);

//   return (
//     <div className="min-h-screen bg-white py-10 px-6 flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Parking Lots</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
//         {lots.map(lot => (
//           <div
//             key={lot.lot_id}
//             className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
//           >
//             <h2 className="text-xl font-semibold text-indigo-600 mb-2 flex items-center gap-2">
//               <FaMapMarkerAlt className="text-indigo-500" />
//               {lot.lot_name}
//             </h2>

//             <div className="text-gray-700 space-y-1 text-sm">
//               <p className="flex items-center gap-2">
//                 <MdLocationCity className="text-gray-500" />
//                 City: <span className="font-medium">{lot.city}</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaCity className="text-gray-500" />
//                 Subcity: <span className="font-medium">{lot.subcity}</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaMapMarkerAlt className="text-gray-500" />
//                 Address: <span className="font-medium">{lot.address}, {lot.zip_code}</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaCar className="text-gray-500" />
//                 Available Spaces: <span className="font-medium">{lot.available_spaces} / {lot.capacity}</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaMoneyBillWave className="text-green-500" />
//                 Price/hr: <span className="font-medium text-green-600">${lot.price_per_hour.toFixed(2)}</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaStar className="text-yellow-500" />
//                 Rating: <span className="font-medium">{lot.average_rating ? lot.average_rating.toFixed(1) : 'No reviews yet'}</span>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState } from 'react';
// import { FaCar, FaCity, FaMapMarkerAlt, FaMoneyBillWave, FaStar } from 'react-icons/fa';
// import { MdLocationCity } from 'react-icons/md';
// import BookingPopup from '../../components/Booking';
// import ReviewPopup from '../../components/Review';

// export default function ParkingLotsList() {
//   const [lots, setLots] = useState([]);

//   useEffect(() => {
//     fetch('/api/user/lots')
//       .then(res => res.json())
//       .then(setLots)
//       .catch(err => console.error('Failed to load lots:', err));
//   }, []);

//   return (
//     <div className="min-h-screen bg-white py-10 px-6 flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Parking Lots</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
//         {lots.map(lot => (
//           <div
//             key={lot.lot_id}
//             className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
//           >
//             <h2 className="text-xl font-semibold text-indigo-600 mb-2 flex items-center gap-2">
//               <FaMapMarkerAlt className="text-indigo-500" />
//               {lot.lot_name}
//             </h2>

//             <div className="text-gray-700 space-y-1 text-sm">
//               <p className="flex items-center gap-2">
//                 <MdLocationCity className="text-gray-500" />
//                 City: <span className="font-medium">{lot.city}</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaCity className="text-gray-500" />
//                 Subcity: <span className="font-medium">{lot.subcity}</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaMapMarkerAlt className="text-gray-500" />
//                 Address: <span className="font-medium">{lot.address}, {lot.zip_code}</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaCar className="text-gray-500" />
//                 Available Spaces: <span className="font-medium">{lot.available_spaces} / {lot.capacity}</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaMoneyBillWave className="text-green-500" />
//                 Price/hr: <span className="font-medium text-green-600">${lot.price_per_hour.toFixed(2)}</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaStar className="text-yellow-500" />
//                 Rating: <span className="font-medium">{lot.average_rating ? lot.average_rating.toFixed(1) : 'No reviews yet'}</span>
//               </p>
//             </div>

//             <div className="mt-4 flex justify-between items-center gap-3">
//               <ReviewPopup lotId={lot.lot_id} />
//               {lot.available_spaces > 0 ? (
//                 <BookingPopup lot_id={lot.lot_id} />
//               ) : (
//                 <p className="text-sm text-red-500 font-semibold">🚫 Fully Booked</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
