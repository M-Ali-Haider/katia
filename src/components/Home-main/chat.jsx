"use client";
import { useState } from "react";
import Content from "./content";
import PromptInput from "./promptInput";

const Chat = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div className="max-w-[768px] w-full flex flex-col justify-end pb-8">
      <Content isSubmit={isSubmit} />
      <PromptInput setIsSubmit={setIsSubmit} />
    </div>
  );
};

export default Chat;
