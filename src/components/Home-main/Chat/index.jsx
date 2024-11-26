"use client";
import { createMessage } from "@/actions/authenticatedActions";
import { addMessage, setInitialMessages } from "@/store/chatMessages";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentFeatures from "./contentFeatures";
import ContentGenerated from "./contentGenerated";
import PromptInput from "./promptInput";

const Chat = ({ data }) => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const container = useRef(null);
  const [inputValue, setInputValue] = useState("");

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
      dispatch(addMessage(assistantMessage));
      setInputValue("");
    },
  });

  useEffect(() => {
    dispatch(setInitialMessages(data.message));
  }, [data.message, dispatch]);

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

    dispatch(addMessage(userMessage));
    setInputValue("");
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
