import React from "react";
import ModalWrapper from ".";
import { ButtonWrapper } from "../UploadProfilePicture/modal";
import { deleteConversation } from "@/actions/authenticatedActions";
import { useFormState } from "react-dom";

const DeleteConvoForm = ({ setIsModalOpen, isModalOpen, title }) => {
  const [state, formAction] = useFormState(deleteConversation, undefined);
  return (
    <ModalWrapper
      setIsModalOpen={setIsModalOpen}
      title={title}
      isModalOpen={isModalOpen}
    >
      <div className="flex items-center justify-center md:justify-end">
        {state?.error && (
          <p className="text-[#F04438] font-inter text-xs my-4">
            {state.error}
          </p>
        )}
        {state?.success && (
          <p className="text-green-500 font-inter text-xs my-4">
            {state.success}
          </p>
        )}
        <div className="flex items-center mt-6 md:mt-10">
          <ButtonWrapper
            onClick={() => setIsModalOpen(false)}
            text={"Cancel"}
            className={"text-[#F5F3C2]"}
          />
          <form action={formAction}>
            <ButtonWrapper
              type="submit"
              text={"Clear Chat History"}
              className={`bg-red-500 text-black`}
            />
          </form>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteConvoForm;
