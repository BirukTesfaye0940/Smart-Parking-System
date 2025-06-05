'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function UserLoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  const res = await signIn('credentials', {
    email: formData.email,
    password: formData.password,
    role: 'user',
    redirect: false,
  });

  // DEBUG LOGGING (temporarily)
  console.log("SignIn response:", res);

  if (res?.ok) {
    router.push('/user/home');
  } else {
    setError('Invalid email or password');
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        User Login
      </h2>

      {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
