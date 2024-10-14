"use client";
import { useState } from "react";
import Content from "./content";
import Pfp from "./pfp";
import PromptInput from "./promptInput";

const HomeMain = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div
      className="flex-1 bg-[#191B31] px-5 flex justify-center 
      relative duration-500 ease-custom-ease transition-all h-svh sm:h-screen"
    >
      <Pfp />
      <div className="max-w-[768px] w-full flex flex-col justify-center pb-8">
        <Content isSubmit={isSubmit} />
        <PromptInput setIsSubmit={setIsSubmit} />
      </div>
    </div>
  );
};

export default HomeMain;
