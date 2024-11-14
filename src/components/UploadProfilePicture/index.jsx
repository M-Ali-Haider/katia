"use client";
import { uploadProfilePicture } from "@/actions/authenticatedActions";
import Image from "next/image";
import { useState } from "react";
import { useFormState } from "react-dom";
import ModalPfp from "./modal";

const UploadProfilePicture = ({ pfp }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, formAction] = useFormState(uploadProfilePicture, undefined);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="active:scale-95 duration-100 ease-custom-ease w-[120px] h-[120px] rounded-full relative overflow-hidden"
      >
        <Image src={pfp} fill alt="change pfp image" className="z-[1]" />
      </button>
      <ModalPfp
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        pfp={pfp}
      />
    </>
  );
};

export default UploadProfilePicture;
