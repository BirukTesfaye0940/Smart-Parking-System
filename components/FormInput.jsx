// components/FormInput.jsx
export default function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  icon = null,
}) {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block mb-1 font-bold text-gray-800">
        {label}
      </label>
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-yellow-500">
        {icon && <span className="mr-2 text-gray-500">{icon}</span>}
        <input
          id={name}
          name={name}
          type={type}
          required
          value={value}
          onChange={onChange}
          placeholder={label}
          className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
        />
      </div>
    </div>
  );
}
