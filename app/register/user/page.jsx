
'use client';
import { useState } from 'react';
import RegisterForm from '../../../components/RegisterForm'; // your form component
import VerifyOtpUser from '../../../components/VerifyUser'; // adjust the import path if needed

export default function UserRegisterPage() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
  });

  const [showOtp, setShowOtp] = useState(false); // track OTP step

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
      setShowOtp(true); // show OTP step
    } else {
      alert(result.error || 'Failed to register admin');
    }
  };

  return showOtp ? (
    <VerifyOtpUser email={formData.email} />
  ) : (
    <RegisterForm
      role="user"
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
