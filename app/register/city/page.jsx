'use client';

import { useState } from 'react';
import LoadingButton from '../../../components/LoadingButton'; // adjust the import path if needed

export default function CityForm() {
  const [formData, setFormData] = useState({
    city_name: '',
    state: '',
    subCities: [
      {
        sub_city_name: '',
        addresses: [
          { street_address: '', zip_code: '' },
        ],
      },
    ],
  });
  const [loading, setLoading] = useState(false);

  const handleCityChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubCityChange = (index, e) => {
    const updated = [...formData.subCities];
    updated[index][e.target.name] = e.target.value;
    setFormData({ ...formData, subCities: updated });
  };

  const handleAddressChange = (subIndex, addrIndex, e) => {
    const updated = [...formData.subCities];
    updated[subIndex].addresses[addrIndex][e.target.name] = e.target.value;
    setFormData({ ...formData, subCities: updated });
  };

  const addSubCity = () => {
    setFormData({
      ...formData,
      subCities: [...formData.subCities, { sub_city_name: '', addresses: [{ street_address: '', zip_code: '' }] }],
    });
  };

  const addAddress = (subIndex) => {
    const updated = [...formData.subCities];
    updated[subIndex].addresses.push({ street_address: '', zip_code: '' });
    setFormData({ ...formData, subCities: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/register/city', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });
    setLoading(false);

    if (res.ok) {
      alert('City structure registered successfully!');
      setFormData({
        city_name: '',
        state: '',
        subCities: [
          { sub_city_name: '', addresses: [{ street_address: '', zip_code: '' }] },
        ],
      });
    } else {
      alert('Failed to submit.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-2xl rounded-2xl mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Register City Structure</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="city_name"
            placeholder="City Name"
            value={formData.city_name}
            onChange={handleCityChange}
            className="p-3 border rounded-lg w-full text-black"
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleCityChange}
            className="p-3 border rounded-lg w-full text-black"
            required
          />
        </div>

        {formData.subCities.map((sub, subIndex) => (
          <div key={subIndex} className="bg-gray-50 border rounded-xl p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-700">Sub-City #{subIndex + 1}</h2>
            </div>
            <input
              type="text"
              name="sub_city_name"
              placeholder="Sub-City Name"
              value={sub.sub_city_name}
              onChange={(e) => handleSubCityChange(subIndex, e)}
              className="p-3 border rounded-lg w-full text-black"
              required
            />

            {sub.addresses.map((addr, addrIndex) => (
              <div key={addrIndex} className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="street_address"
                  placeholder="Street Address"
                  value={addr.street_address}
                  onChange={(e) => handleAddressChange(subIndex, addrIndex, e)}
                  className="p-3 border rounded-lg  text-black"
                  required
                />
                <input
                  type="text"
                  name="zip_code"
                  placeholder="ZIP Code"
                  value={addr.zip_code}
                  onChange={(e) => handleAddressChange(subIndex, addrIndex, e)}
                  className="p-3 border rounded-lg text-black"
                  required
                />
              </div>
            ))}

            <button
              type="button"
              onClick={() => addAddress(subIndex)}
              className="mt-2 text-sm text-blue-600 hover:underline"
            >
              + Add Address
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addSubCity}
          className="text-blue-600 font-medium hover:underline"
        >
          + Add Sub-City
        </button>

        <LoadingButton
          loading={loading}
          text="Register City Structure"
          loadingText="Registering..."
        />
      </form>
    </div>
  );
}
