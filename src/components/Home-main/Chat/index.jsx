"use client";
import { createMessage } from "@/actions/authenticatedActions";
import { addMessage, setInitialMessages } from "@/store/chatMessages";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentFeatures from "./contentFeatures";
import ContentGenerated from "./contentGenerated";
import PromptInput from "./promptInput";
import styles from "./style.module.css";

const Chat = ({ data }) => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const container = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const {
    mutate: createMessageMutation,
    isPending,
    isError,
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
    <div className="w-full h-full">
      <div
        ref={container}
        className={`${styles.showScrollbar} overflow-y-scroll px-5 h-[calc(100%-110px)] sm:h-[calc(100%-83px)] flex items-center justify-center`}
      >
        <div className="max-w-[768px] w-full h-full">
          {messages.length > 0 ? (
            <ContentGenerated
              conversationMessages={messages}
              isLoading={isPending}
              isError={isError}
              error={error}
            />
          ) : (
            <ContentFeatures />
          )}
        </div>
      </div>
      {/* Input Prompt */}
      <div className="w-full flex items-center justify-center">
        <div className="max-w-[768px] w-full">
          <PromptInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSubmitButton={handleSubmitButton}
            isLoading={isPending}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
