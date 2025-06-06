'use client';
import { useState } from 'react';

export default function RegisterParkingLot() {
  const [lotName, setLotName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [spaces, setSpaces] = useState([]);

  // New state for location
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [streetAddressId, setStreetAddressId] = useState('');

  const addSpace = () => {
    setSpaces([...spaces, { space_number: '', is_handicap: false, status: 'available' }]);
  };

  const updateSpace = (index, field, value) => {
    const updated = [...spaces];
    updated[index][field] = value;
    setSpaces(updated);
  };

  const removeSpace = (index) => {
    setSpaces(spaces.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      owner_id: Number(ownerId),
      lot_name: lotName,
      capacity: Number(capacity),
      spaces,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      street_address_id: Number(streetAddressId),
    };

    const res = await fetch('/api/register/parking-lot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

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
            type="number"
            placeholder="Owner ID"
            value={ownerId}
            onChange={(e) => setOwnerId(e.target.value)}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 ring-blue-400 text-black"
            required
          />
        </div>

        {/* Location Fields */}
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

        {/* Spaces Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-black">Parking Spaces</h3>
          <div className="space-y-4">
            {spaces.map((space, index) => (
              <div key={index} className="flex flex-wrap items-center gap-2 border p-4 rounded-xl bg-gray-50">
                <input
                  type="text"
                  placeholder="Space Number"
                  value={space.space_number}
                  onChange={(e) => updateSpace(index, 'space_number', e.target.value)}
                  className="flex-1 min-w-[120px] border p-2 rounded-md text-black"
                  required
                />
                <select
                  value={space.status}
                  onChange={(e) => updateSpace(index, 'status', e.target.value)}
                  className="border p-2 rounded-md text-black"
                >
                  <option value="available">Available</option>
                  <option value="occupied">Occupied</option>
                </select>
                <label className="flex items-center gap-2 text-black">
                  <input
                    type="checkbox"
                    checked={space.is_handicap}
                    onChange={(e) => updateSpace(index, 'is_handicap', e.target.checked)}
                  />
                  Handicap
                </label>
                <button
                  type="button"
                  onClick={() => removeSpace(index)}
                  className="text-red-500 hover:underline ml-auto text-black"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addSpace}
              className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
            >
              + Add Space
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-lg"
        >
          Register Lot
        </button>
      </form>
    </div>
  );
}
