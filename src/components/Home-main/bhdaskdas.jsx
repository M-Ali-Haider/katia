"use client";
import { createMessage } from "@/actions/authenticatedActions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Content from "./content";
import PromptInput from "./Chat/promptInput";

const Chat = ({ dCData }) => {
  const queryClient = useQueryClient();
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState(dCData.message);

  const { mutate: createMessageMutation, isLoading } = useMutation({
    mutationFn: createMessage,
    onSuccess: (data) => {
      setMessages((prevMessages) => [...prevMessages, data.message]);
      setInputValue("");
    },
  });

  const handleSubmitButton = () => {
    createMessageMutation({ prompt: inputValue });
  };

  if (isLoading) {
    return <div>Is Loading</div>;
  }
  return (
    <>
      <Content conversationData={dCData} />
      <PromptInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmitButton={handleSubmitButton}
      />
    </>
  );
};

export default Chat;
