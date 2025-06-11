// components/RegisterForm.jsx
import FormInput from './FormInput';
import LoadingButton from './LoadingButton';

export default function RegisterForm({ formData, onChange, onSubmit, role,loading }) {
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

      <LoadingButton
        loading={loading}
        text="Register"
        loadingText="Registering..."
      />
    </form>
  );
}
