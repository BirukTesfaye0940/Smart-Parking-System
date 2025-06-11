"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingButton from "./LoadingButton";

export default function LoginForm({ role, redirectTo }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      role,
      redirect: false,
    });

    setLoading(false);

    if (res?.ok && !res.error) {
      router.push(redirectTo);
    } else {
      setError("Invalid email or password");
    }
  };

  const roleLabel = role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white  rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          {roleLabel} Login
        </h2>

        {error && (
          <div className="mb-4 bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded-md text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 text-bold">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl  text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-semibold">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300  text-gray-900 "
              placeholder="••••••••"
            />
          </div>

          <LoadingButton
            loading={loading}
            text="Login"
            loadingText="Logging in..."
          />
        </form>
      </div>
    </div>
  );
}
