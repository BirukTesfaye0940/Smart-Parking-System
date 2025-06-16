
"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function PaymentSuccessPageContent() {
  const [status, setStatus] = useState("verifying");
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const tx_ref = searchParams.get("tx_ref");

    if (!tx_ref) {
      setStatus("error");
      setMessage("Missing transaction reference.");
      return;
    }

    const verifyPayment = async () => {
      try {
        const res = await fetch(`/api/payment/callback?tx_ref=${tx_ref}`);
        const data = await res.json();

        if (res.ok) {
          setStatus("success");
          setMessage(data.message || "Payment verified successfully!");
        } else {
          setStatus("error");
          setMessage(data.message || "Verification failed.");
        }
      } catch (err) {
        setStatus("error");
        setMessage("An unexpected error occurred.");
      }
    };

    verifyPayment();
  }, [searchParams]);

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 rounded-xl shadow-lg bg-white text-center">
        {status === "verifying" && (
          <p className="text-blue-600 text-lg">Verifying payment...</p>
        )}
        {status === "success" && (
          <div className="text-green-600 text-xl font-semibold">
            ✅ {message}
          </div>
        )}
        {status === "error" && (
          <div className="text-red-600 text-xl font-semibold">
            ❌ {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<p className="text-center pt-24">Loading...</p>}>
      <PaymentSuccessPageContent />
    </Suspense>
  );
}
