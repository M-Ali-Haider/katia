"use client";
import { useState } from "react";
import Content from "./content";
import PromptInput from "./promptInput";
import { useQuery } from "@tanstack/react-query";
import { createConversation } from "@/actions/authenticatedActions";

const Chat = ({ session }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["createConversation"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/create-conversation`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "X-CSRFToken": session.csrfToken,
  //           Cookie: `csrftoken=${session.csrfToken}; sessionid=${session.sessionId}`,
  //         },
  //         credentials: "include",
  //       }
  //     );
  //     if (!res.ok) {
  //       throw new Error("Failed to create or retrieve conversation");
  //     }
  //     return res.json();
  //   },
  //   onSuccess: (data) => {
  //     console.log("Conversation data", data);
  //   },
  //   onError: (error) => {
  //     console.error("Error creating conversation", error.message);
  //   },
  // });

  // if (isLoading) return <div>Loading conversation...</div>;
  // if (error) return <div>Error loading conversation: {error.message}</div>;

  return (
    <div className="max-w-[768px] w-full flex flex-col justify-end pb-8">
      <Content
        isSubmit={isSubmit}
        // conversationData={data}
      />
      <PromptInput setIsSubmit={setIsSubmit} />
    </div>
  );
};

export default Chat;
