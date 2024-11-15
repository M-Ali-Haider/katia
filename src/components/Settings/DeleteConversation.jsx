"use client";

import { useState } from "react";
import ModalWrapper from "../Modal";
import { ButtonWrapper } from "../UploadProfilePicture/modal";
import DeleteConvoForm from "../Modal/deleteConvoForm";

const DeleteConversation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="text-[#EC6853] hover:text-[#fa6e59] duration-300 transition mt-4 cursor-pointer"
      >
        Clear Chat History
      </div>
      <DeleteConvoForm
        title={"Are you sure you want to Clear Chat History?"}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default DeleteConversation;
