"use client";
import { contactFAQs } from "@/utils/contactFAQs";
import { useState } from "react";

const ContactRight = () => {
  const [FAQ, setFAQ] = useState(2);
  return (
    <>
      <div className="flex flex-col gap-4 flex-1 sm:min-w-[500px]">
        {contactFAQs.map((item, index) => (
          <div
            key={index}
            onClick={() => setFAQ(index)}
            className={`${
              FAQ === index
                ? "bg-[#25262D] pb-[39px]"
                : "bg-[#101010] pb-[22px]"
            }
            pt-[22px] px-6 rounded-xl cursor-pointer ease-custom-ease duration-300 transition-all`}
          >
            <div className="text-white">{item.title}</div>
            <div
              className={`${
                FAQ === index ? "max-h-[500px]" : "max-h-0"
              } text-[#898A96] overflow-hidden mt-5 ease-custom-ease duration-300 transition-all`}
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactRight;
