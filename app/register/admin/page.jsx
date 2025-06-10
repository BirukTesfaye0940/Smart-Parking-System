// // app/register/user/page.jsx
// 'use client';

// import RegisterForm from '../../../components/RegisterForm';

// import { useState } from 'react';

// export default function UserRegisterPage() {
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     email: '',
//     password: '',
//     phone: '',
//   });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch('/api/register/admin',{
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });

//     const result = await res.json();
//     if (res.ok) {
//       alert('Admin registered!');
//     } else {
//       alert(result.error || 'Failed to register admin');
//     }
//   };

//   return (
//     <RegisterForm
//       role="admin"
//       formData={formData}
//       onChange={handleChange}
//       onSubmit={handleSubmit}
//     />
//   );
// }

'use client';
import { useState } from 'react';
import RegisterForm from '../../../components/RegisterForm'; // your form component
import VerifyOtp from '../../../components/VerifyAdmin'; // adjust the import path if needed

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
    const res = await fetch('/api/register/admin', {
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
    <VerifyOtp email={formData.email} />
  ) : (
    <RegisterForm
      role="admin"
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
