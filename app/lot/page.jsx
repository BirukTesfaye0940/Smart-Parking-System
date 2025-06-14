"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  FaCar,
  FaCity,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaStar
} from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import BookingPopup from "../../components/Booking";
import Loader from "../../components/Loader/Loader";
import ReviewPopup from "../../components/Review";

const LotMap = dynamic(() => import("../../components/LotMap"), { ssr: false });

export default function ParkingLotsList() {
  const [lots, setLots] = useState([]);
  const [selectedLot, setSelectedLot] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="min-h-screen bg-white py-10 px-6 flex flex-col items-center">
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {lots.map((lot) => (
            <div
              key={lot.lot_id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col justify-between"
            >
              {/* Lot Image */}
              {lot.image && (
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
                  <img
                    src={lot.image}
                    alt={`${lot.lot_name} preview`}
                    className="object-cover w-full h-full hover:scale-105 transition-transform"
                  />
                </div>
              )}

              <h2 className="text-xl font-semibold text-indigo-700 mb-3 flex items-center gap-2">
                <FaMapMarkerAlt className="text-indigo-500" />
                {lot.lot_name}
              </h2>

              <div className="text-gray-700 space-y-2 text-sm mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <p className="flex items-center gap-2">
                    <MdLocationCity className="text-gray-500" />
                    <strong>City:</strong> {lot.city}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCity className="text-gray-500" />
                    <strong>Subcity:</strong> {lot.subcity}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-gray-500" />
                    <strong>Address:</strong> {lot.address}, {lot.zip_code}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCar className="text-gray-500" />
                    <strong>Spaces:</strong> {lot.available_spaces} /{" "}
                    {lot.capacity}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <p className="flex items-center gap-2">
                    <FaMoneyBillWave className="text-green-600" />
                    <strong>Price/hr:</strong> ${lot.price_per_hour.toFixed(2)}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    <strong>Rating:</strong>{" "}
                    {lot.average_rating
                      ? lot.average_rating.toFixed(1)
                      : "No reviews yet"}
                  </p>
                </div>
              </div>


              <div className="mt-auto pt-4 border-t flex flex-wrap justify-between items-center gap-3">
                <button
                  onClick={() => setSelectedLot(lot)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded-lg shadow"
                >
                 🧭 View on Map
                </button>

                <ReviewPopup lotId={lot.lot_id} />



                {lot.available_spaces > 0 &&
                lot.available_space_ids?.length > 0 ? (
                  <div className="flex items-center gap-2 ml-12">
                     <BookingPopup
                    lot_id={lot.lot_id}
                    availableSpaceIds={lot.available_space_ids}
                  />
                    </div>
                 
                ) : (
                  <span className="text-sm text-red-500 font-semibold">
                    🚫 Fully Booked
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Map Modal */}
      {selectedLot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 w-full max-w-2xl relative shadow-xl">
            <button
              onClick={() => setSelectedLot(null)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              ✖
            </button>
            <h3 className="text-lg font-bold mb-4 text-center text-indigo-700">
              Map - {selectedLot.lot_name}
            </h3>
            <LotMap
              latitude={selectedLot.latitude}
              longitude={selectedLot.longitude}
              lotName={selectedLot.lot_name}
            />
          </div>
        </div>
      )}
    </div>
  );
}
