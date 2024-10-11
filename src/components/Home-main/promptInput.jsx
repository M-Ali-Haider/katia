"use client";
import { useState } from "react";
const PromptInput = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="flex gap-[10px] items-center py-[13.5px] border-[#898A96] border rounded-xl px-4 sm:px-6 bg-[#0E0F21]">
      <input
        type="text"
        className="bg-transparent flex-1 text-sm leading-[22px] sm:text-base focus:outline-none"
        placeholder="Ask..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className={`${
          inputValue === ""
            ? "bg-[#25262D] pointer-events-none"
            : "bg-[#F5F3C2] pointer-events-auto"
        }  flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded border-none`}
      >
        <PromptSendButtonSVG
          isInput={inputValue === ""}
          className="w-5 h-5 sm:w-7 sm:h-7"
        />
      </button>
    </div>
  );
};

export default PromptInput;

const PromptSendButtonSVG = ({ isInput, ...props }) => (
  <svg
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.8335 9.66667L10.0002 5.5L14.1668 9.66667M10.0002 15.5V6.33333"
      className={`${isInput ? "stroke-white" : "stroke-black"}`}
      //   stroke={strokeColor}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
