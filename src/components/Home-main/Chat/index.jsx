"use client";
import { useEffect, useRef, useState } from "react";
import ContentFeatures from "./contentFeatures";
import ContentGenerated from "./contentGenerated";
import PromptInput from "./promptInput";
import { useMutation } from "@tanstack/react-query";
import { createMessage } from "@/actions/authenticatedActions";
import { transformMessageFormat } from "@/utils/transformMessageFormat";

const Chat = ({ data }) => {
  const [messages, setMessages] = useState(
    transformMessageFormat(data.message)
  );
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
        role: "assistant",
        content: data.response,
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
      role: "user",
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
