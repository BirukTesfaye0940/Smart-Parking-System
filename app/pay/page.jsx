"use client";
import { useState } from "react";
import { FaCar, FaSpinner } from "react-icons/fa";

export default function PayParkingFee() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePay = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/payment/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      setLoading(false);

      if (data.link) {
        window.location.href = data.link;
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-gray-50">
      <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-xl border">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Pay for Parking
        </h2>

        <p className="text-gray-600 text-center mb-4">
          Click the button below to pay for your unpaid booking.
        </p>

        {error && (
          <div className="text-red-600 text-center mb-4 font-medium">
            {error}
          </div>
        )}

        <button
          onClick={handlePay}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" /> Processing...
            </>
          ) : (
            <>
              <FaCar /> Pay Now
            </>
          )}
        </button>
      </div>
    </div>
  );
}
