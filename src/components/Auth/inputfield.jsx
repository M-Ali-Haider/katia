const InputField = ({ type, placeholder }) => {
  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor=""
        className="mb-2 font-medium text-xs font-inter text-white"
      >
        Email*
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full text-sm placeholder:text-[#98A2B3] rounded-lg bg-[#25262D] border-none py-3 px-[14px]"
      />
    </div>
  );
};

export default InputField;
