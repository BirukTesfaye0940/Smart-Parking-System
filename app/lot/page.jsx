'use client';
import { useEffect, useState } from "react";
import {
  MapPin,
  Building2,
  Car,
  DollarSign,
  Star,
  Eye,
  AlertCircle
} from "lucide-react";
import BookingPopup from "../../components/Booking";
import Loader from "../../components/Loader/Loader";
import ReviewPopup from "../../components/Review";
import LotFilterBar from "../../components/UserLot/LotFilterBar";
import LotMap from "../../components/LotMap";

export default function ParkingLotsList() {
  const [lots, setLots] = useState([]);
  const [selectedLot, setSelectedLot] = useState(null);
  const [loading, setLoading] = useState(true);

  const applyFilters = (filterData) => {
    setLoading(true);
    const query = new URLSearchParams(filterData).toString();
    fetch(`/api/user/lots?${query}`)
      .then((res) => res.json())
      .then((data) => {
        setLots(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to filter lots:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch("/api/user/lots")
      .then((res) => res.json())
      .then((data) => {
        setLots(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load lots:", err);
        setLoading(false);
      });
  }, []);

  const getAvailabilityStatus = (lot) => {
    const percentage = (lot.available_spaces / lot.capacity) * 100;
    if (percentage === 0) return { color: 'text-red-600 bg-red-50 border-red-200', text: 'Fully Booked', icon: AlertCircle };
    if (percentage <= 25) return { color: 'text-orange-600 bg-orange-50 border-orange-200', text: 'Almost Full', icon: AlertCircle };
    if (percentage <= 50) return { color: 'text-yellow-600 bg-yellow-50 border-yellow-200', text: 'Filling Up', icon: Car };
    return { color: 'text-green-600 bg-green-50 border-green-200', text: 'Available', icon: Car };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 px-4 mt-16">
      <div className="max-w-7xl mx-auto">

        <LotFilterBar onFilter={applyFilters} />

        {loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="text-center">
              <Loader />
              <p className="text-gray-600 mt-4">Finding the best parking spots for you...</p>
            </div>
          </div>
        ) : lots.length === 0 ? (
          <div className="text-center py-16">
            <Car className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No parking lots found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results</p>
          </div>
        ) : (
          <>
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-lg font-medium text-gray-700">
                Found <span className="text-blue-600 font-bold">{lots.length}</span> parking {lots.length === 1 ? 'lot' : 'lots'}
              </p>
            </div>

            {/* Parking Lots Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {lots.map((lot) => {
                const availability = getAvailabilityStatus(lot);
                const AvailabilityIcon = availability.icon;

                return (
                  <div
                    key={lot.lot_id}
                    className="bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 group"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      {lot.image ? (
                        <img
                          src={lot.image}
                          alt={`${lot.lot_name} preview`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                          <Car className="w-16 h-16 text-white opacity-80" />
                        </div>
                      )}
                      
                      {/* Availability Badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold border ${availability.color} backdrop-blur-sm`}>
                        <div className="flex items-center gap-1">
                          <AvailabilityIcon className="w-3 h-3" />
                          {availability.text}
                        </div>
                      </div>

                      {/* Price Badge */}
                      <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <div className="flex items-center gap-1 text-green-600 font-bold">
                          <DollarSign className="w-4 h-4" />
                          {lot.price_per_hour.toFixed(2)}/hr
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-blue-500" />
                          {lot.lot_name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {lot.city}
                          </div>
                          {lot.subcity && (
                            <div className="flex items-center gap-1">
                              <Building2 className="w-4 h-4" />
                              {lot.subcity}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 rounded-xl p-3">
                          <div className="flex items-center gap-2 text-gray-600 mb-1">
                            <Car className="w-4 h-4" />
                            <span className="text-sm font-medium">Capacity</span>
                          </div>
                          <div className="text-lg font-bold text-gray-800">
                            {lot.available_spaces}/{lot.capacity}
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(lot.available_spaces / lot.capacity) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-3">
                          <div className="flex items-center gap-2 text-gray-600 mb-1">
                            <Star className="w-4 h-4" />
                            <span className="text-sm font-medium">Rating</span>
                          </div>
                          <div className="text-lg font-bold text-gray-800">
                            {lot.average_rating ? (
                              <div className="flex items-center gap-1">
                                {lot.average_rating.toFixed(1)}
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      className={`w-3 h-3 ${
                                        star <= lot.average_rating 
                                          ? 'text-yellow-400 fill-current'
                                          : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <span className="text-gray-500 text-sm">No reviews</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="mb-6 p-3 bg-blue-50 rounded-xl">
                        <p className="text-sm text-gray-600 flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 text-blue-500" />
                          <span>{lot.address}, {lot.zip_code}</span>
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => setSelectedLot(lot)}
                          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-3 py-1.5 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 max-h-16">
                          <Eye className="w-4 h-4" />
                          View Map
                        </button>
                        
                        <ReviewPopup lotId={lot.lot_id} />

                        {lot.available_spaces > 0 && lot.available_space_ids?.length ? (
                          <BookingPopup
                            lot_id={lot.lot_id}
                            availableSpaceIds={lot.available_space_ids}
                          />
                        ) : (
                          <div className="bg-red-50 border border-red-200 text-red-600 font-semibold px-4 py-3 rounded-xl flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            Full
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Map Modal */}
        {selectedLot && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  {selectedLot.lot_name}
                </h3>
                <button
                  onClick={() => setSelectedLot(null)}
                  className="text-gray-500 hover:text-red-500 text-2xl font-bold p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  ×
                </button>
              </div>
              
              <LotMap
                latitude={selectedLot.latitude}
                longitude={selectedLot.longitude}
                lotName={selectedLot.lot_name}
              />
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-blue-800 mb-2">Address</h4>
                  <p className="text-blue-700">{selectedLot.address}, {selectedLot.zip_code}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-green-800 mb-2">Price</h4>
                  <p className="text-green-700">${selectedLot.price_per_hour.toFixed(2)}/hour</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-purple-800 mb-2">Availability</h4>
                  <p className="text-purple-700">{selectedLot.available_spaces}/{selectedLot.capacity} spaces</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}