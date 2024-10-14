const CustomButton = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`font-medium text-sm w-full bg-[#F5F3C2] text-black 
        flex items-center justify-center py-[14px] rounded-lg ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
