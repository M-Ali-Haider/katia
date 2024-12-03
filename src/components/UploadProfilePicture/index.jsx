"use client";
import Image from "next/image";
import { useState } from "react";
import ModalPfp from "./modal";
import { useSelector } from "react-redux";

const UploadProfilePicture = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pfp = useSelector((state) => state.pfp.profile_picture);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="active:scale-95 duration-100 ease-custom-ease w-[120px] h-[120px] rounded-full relative overflow-hidden"
      >
        <div
          className={`${
            isHovered ? "bg-[rgba(0,0,0,0.7)] opacity-100" : "opacity-0"
          } w-full h-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ease-custom-ease`}
        >
          Edit Photo
        </div>
        <Image src={pfp} fill alt="change pfp image" className="-z-[1]" />
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
