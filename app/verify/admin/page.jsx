"use client";
import { useEffect, useRef, useState } from "react";
import { FiAlertTriangle, FiCheckCircle } from "react-icons/fi";

export default function VerifyOtp({ email }) {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(300); // 5 minutes
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null); // "success" | "error"
  const inputsRef = useRef([]);

  // Send OTP email on mount
  useEffect(() => {
    sendOtp();
  }, []);

  useEffect(() => {
    if (timer === 0) return;
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // Generate OTP and send it with email
  async function sendOtp() {
    setSendingOtp(true);
    setMessage(null);
    setStatus(null);

    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

    try {
      const res = await fetch("/api/admin/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: generatedOtp }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("OTP sent successfully to your email.");
        setStatus("success");
        setTimer(300);

        setOtp(generatedOtp.split(""));
        inputsRef.current[0]?.focus();
      } else {
        setMessage(data.error || "Failed to send OTP.");
        setStatus("error");
      }
    } catch (err) {
      setMessage("Network error while sending OTP.");
      setStatus("error");
    } finally {
      setSendingOtp(false);
    }
  }

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const fullOtp = otp.join("");
    if (fullOtp.length !== 6) {
      setMessage("Please enter all 6 digits.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/admin/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: fullOtp }),
      });

      const data = await res.json();
      setMessage(data.message || data.error);
      setStatus(res.ok ? "success" : "error");
    } catch {
      setMessage("Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Verify Your Account</h2>
        <p className="text-gray-500 mb-6">
          Enter the 6-digit code sent to <strong>{email}</strong>
        </p>

        <div className="flex justify-center space-x-2 mb-4">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={(el) => (inputsRef.current[idx] = el)}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className="w-12 h-12 border-2 border-gray-300 rounded-xl text-center text-xl font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-4">
          Code expires in{" "}
          <span className="font-semibold text-indigo-600">{formatTime(timer)}</span>
        </p>

        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-indigo-600 text-white rounded-xl text-lg font-medium hover:bg-indigo-700 transition mb-4"
        >
          Verify
        </button>

        {message && (
          <div
            className={`mt-4 p-3 rounded-xl flex items-center space-x-2 text-sm ${
              status === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {status === "success" ? (
              <FiCheckCircle size={18} />
            ) : (
              <FiAlertTriangle size={18} />
            )}
            <span>{message}</span>
          </div>
        )}
      </div>
    </div>
  );
}
