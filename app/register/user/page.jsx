// app/register/user/page.jsx
'use client';

import RegisterForm from '../../../components/RegisterForm';

import { useState } from 'react';

export default function UserRegisterPage() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/register/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (res.ok) {
      alert('User registered!');
    } else {
      alert(result.error || 'Failed to register user');
    }
  };

  return (
    <RegisterForm
      role="user"
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
