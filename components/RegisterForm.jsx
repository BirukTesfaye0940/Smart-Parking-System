// components/RegisterForm.jsx
import {
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
  FaUser,
} from 'react-icons/fa';
import FormInput from './FormInput';
import LoadingButton from './LoadingButton';

export default function RegisterForm({ formData, onChange, onSubmit, role, loading }) {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-lg mx-auto mt-12 bg-white p-8 rounded-2xl shadow-2xl space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-6">
        Register as {role.charAt(0).toUpperCase() + role.slice(1)}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="First Name"
          name="first_name"
          value={formData.first_name}
          onChange={onChange}
          icon={<FaUser className="text-gray-400" />}
        />
        <FormInput
          label="Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={onChange}
          icon={<FaUser className="text-gray-400" />}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
        <FormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={onChange}
        icon={<FaEnvelope className="text-gray-400" />}
      />

      <FormInput
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={onChange}
        icon={<FaLock className="text-gray-400" />}
      />
      </div>

      <FormInput
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={onChange}
        icon={<FaPhoneAlt className="text-gray-400" />}
      />

      <div className="pt-4">
        <LoadingButton
          loading={loading}
          text="Register"
          loadingText="Registering..."
        />
      </div>
    </form>
  );
}
