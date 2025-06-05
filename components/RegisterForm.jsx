// components/RegisterForm.jsx
import FormInput from './FormInput';

export default function RegisterForm({ formData, onChange, onSubmit, role }) {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Register as {role.charAt(0).toUpperCase() + role.slice(1)}
      </h2>

      <FormInput label="First Name" name="first_name" value={formData.first_name} onChange={onChange}/>
      <FormInput label="Last Name" name="last_name" value={formData.last_name} onChange={onChange} />
      <FormInput label="Email" name="email" type="email" value={formData.email} onChange={onChange} />
      <FormInput label="Password" name="password" type="password" value={formData.password} onChange={onChange} />
      <FormInput label="Phone" name="phone" value={formData.phone} onChange={onChange} />

      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Register
      </button>
    </form>
  );
}
