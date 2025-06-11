'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import LoadingButton from '../../../components/LoadingButton';

export default function RegisterParkingLot() {
  const [lotName, setLotName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [streetAddressId, setStreetAddressId] = useState('');
const [imageFile, setImageFile] = useState(null);
const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!session?.user?.id) {
      alert("You must be logged in to register a parking lot.");
      return;
    }

    const formData = new FormData();
    formData.append('owner_id', session.user.id);
    formData.append('lot_name', lotName);
    formData.append('capacity', capacity);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('street_address_id', streetAddressId);

    if (imageFile) {
      formData.append('image', imageFile);
    }

    const res = await fetch('/api/register/parking-lot', {
      method: 'POST',
      body: formData,
    });
    setLoading(false);

    const result = await res.json();
    alert(result.success ? 'Parking Lot Registered ✅' : `Error: ${result.error}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-black">Register Parking Lot</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Lot Name"
            value={lotName}
            onChange={(e) => setLotName(e.target.value)}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 ring-blue-400 text-black"
            required
          />
          <input
            type="number"
            placeholder="Capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 ring-blue-400 text-black"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 ring-blue-400 text-black"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="number"
            step="any"
            placeholder="Latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 ring-blue-400 text-black"
            required
          />
          <input
            type="number"
            step="any"
            placeholder="Longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 ring-blue-400 text-black"
            required
          />
          <input
            type="number"
            placeholder="Street Address ID"
            value={streetAddressId}
            onChange={(e) => setStreetAddressId(e.target.value)}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 ring-blue-400 text-black"
            required
          />
        </div>

        <LoadingButton
          loading={loading}
          text="Register Parking Lot"
          loadingText="Registering..."
          />
      </form>
    </div>
  );
}
