function Input({
  children,
  labelInput,
  id,
  name,
  value,
  type,
  placeholder,
  handleInputBlur,
  handleInputChanged,
}) {
  return (
    <div>
      <div className="mb-5">
        <label
          className="block text-gray-700 text-base font-bold mb-2"
          htmlFor={id}
        >
          {labelInput}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onBlur={handleInputBlur}
          onChange={handleInputChanged}
          id={id}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
        />
        {children}
      </div>
    </div>
  );
}

export default Input;
