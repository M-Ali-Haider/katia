"use client";

import {
  createConversation,
  displayConversation,
} from "@/actions/authenticatedActions";
import { useQuery } from "@tanstack/react-query";
import Chat from ".";
import LoadingRing from "@/components/LoadingRing";
import Image from "next/image";

const GetConversation = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["conversation"],
    queryFn: () => createConversation(),
  });

  const {
    data: preMessages,
    isLoading: loadingPreMessages,
    error: messagesError,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: () => displayConversation(),
    enabled: !!data?.conv_id,
  });

  if (isLoading || loadingPreMessages)
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-44 h-44">
          <Image src="/katia_logo.png" fill alt="katia logo image" />
        </div>
        <LoadingRing
          colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
        />
      </div>
    );
  if (error || messagesError) {
    return (
      <div>
        {error && <div>Error fetching conversation {error.message}</div>}
        {messagesError && (
          <div>Error displaying conversation {messagesError.message}</div>
        )}
      </div>
    );
  }
  return <Chat preMessages={preMessages} />;
};

export default GetConversation;
