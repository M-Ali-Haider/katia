"use client";
import { useEffect, useRef, useState } from "react";
import ContentFeatures from "./contentFeatures";
import ContentGenerated from "./contentGenerated";
import PromptInput from "./promptInput";
import { useMutation } from "@tanstack/react-query";
import { createMessage } from "@/actions/authenticatedActions";

const Chat = ({ preMessages }) => {
  const [messages, setMessages] = useState(preMessages.message);
  const [inputValue, setInputValue] = useState("");
  const container = useRef(null);

  const {
    mutate: createMessageMutation,
    isPending,
    error,
  } = useMutation({
    mutationFn: createMessage,
    onSuccess: (data) => {
      const assistantMessage = {
        role: "Assistant",
        content: data.message,
      };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
      setInputValue("");
    },
  });

  useEffect(() => {
    if (container.current) {
      container.current.scrollTo({
        top: container.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isPending]);

  const handleSubmitButton = (e) => {
    e.preventDefault();

    const userMessage = {
      role: "User",
      content: inputValue,
    };

    setInputValue("");
    setMessages((preMessages) => [...preMessages, userMessage]);
    createMessageMutation(inputValue);
  };

  return (
    <div className="max-w-[768px] w-full flex flex-col justify-end pb-8">
      <div className="h-[calc(100%-110px)] sm:h-[calc(100%-83px)] flex items-end justify-center">
        {messages.length > 0 ? (
          <ContentGenerated
            conversationMessages={messages}
            container={container}
            isLoading={isPending}
            error={error}
          />
        ) : (
          <ContentFeatures />
        )}
      </div>
      <PromptInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmitButton={handleSubmitButton}
        isLoading={isPending}
      />
    </div>
  );
};

export default Chat;
