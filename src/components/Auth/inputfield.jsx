const InputField = ({ type, placeholder }) => {
  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor=""
        className="mb-2 font-medium text-xs 2xl:text-base font-inter text-white"
      >
        Email*
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full 2xl:text-base text-sm placeholder:text-[#98A2B3] rounded-lg bg-[#25262D] border-none py-3 2xl:py-4 px-[14px]"
      />
    </div>
  );
};

export default InputField;
