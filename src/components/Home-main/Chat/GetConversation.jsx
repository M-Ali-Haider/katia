"use client";

import { displayConversation } from "@/actions/authenticatedActions";
import LoadingRing from "@/components/LoadingRing";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Chat from ".";

const GetConversation = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["messages"],
    queryFn: () => displayConversation(),
  });

  if (isLoading)
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
  if (error) {
    return (
      <div>
        {error && <div>Error fetching conversation {error.message}</div>}
      </div>
    );
  }
  return <Chat data={data} />;
};

export default GetConversation;
