const InputField = ({ type, placeholder, label, name }) => {
  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor=""
        className="mb-2 font-medium text-xs 2xl:text-base font-inter text-white"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required
        className="w-full 2xl:text-base text-sm placeholder:text-[#98A2B3] rounded-lg bg-[#25262D] border-none py-3 2xl:py-4 px-[14px] 
        focus:outline-none focus:ring-[1px] focus:ring-[#9773FF]"
      />
    </div>
  );
};

export default InputField;
