import { uploadProfilePicture } from "@/actions/authenticatedActions";
import CrossSVG from "@/assets/closeSvg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import LoadingRing from "../LoadingRing";

const ModalPfp = ({ isModalOpen, setIsModalOpen, pfp }) => {
  const modalRef = useRef(null);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);
  const [state, formAction] = useFormState(uploadProfilePicture, undefined);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(pfp);
  const [isHovered, setIsHovered] = useState(false);

  const handleCancel = (e) => {
    e.preventDefault();
    setSelectedFile(null);
    setPreviewUrl(pfp);
    setIsModalOpen(false);
  };

  const handleUploadClick = (e) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  };

  useEffect(() => {
    if (state?.success) {
      setPreviewUrl(state.profile_picture);
      setIsModalOpen(false);
    }
  }, [state, setIsModalOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsModalOpen]);

  return (
    <div
      className={`${
        isModalOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      } fixed inset-0 z-[2] p-14 flex items-center justify-center bg-[rgba(0,0,0,0.3)] transition-all duration-150 ease-custom-ease`}
    >
      <div
        ref={modalRef}
        className={`${
          isModalOpen ? "mt-0" : "mt-10"
        } p-5 md:p-8 max-w-[733px] w-full bg-[#0E0F21] rounded-2xl transition-all duration-500 ease-custom-ease`}
      >
        <div className="flex justify-between">
          <div className="text-2xl md:text-3xl">Edit photo</div>
          <button onClick={() => setIsModalOpen(false)}>
            <CrossSVG />
          </button>
        </div>
        <form ref={formRef} action={formAction}>
          <div className="py-10 flex items-center justify-center">
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleUploadClick}
              className="relative w-44 h-44 md:w-[250px] md:h-[250px] rounded-full overflow-hidden cursor-pointer"
            >
              <Image
                src={selectedFile ? URL.createObjectURL(selectedFile) : pfp}
                fill
                alt="pfp"
                className="object-cover"
              />
              <div
                className={`${
                  isHovered ? "bg-[rgba(0,0,0,0.7)] opacity-100" : "opacity-0"
                } absolute inset-0 flex items-center justify-center font-semibold transition-all duration-300 ease-custom-ease z-10`}
              >
                Edit Photo
              </div>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            name="profile_picture"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          {state?.error && (
            <p className="text-red-500 text-center">{state.error}</p>
          )}

          {state?.success && (
            <p className="text-green-500 text-center">{state.success}</p>
          )}

          <div className="flex items-center justify-center md:justify-end">
            <div className="flex items-center">
              <ButtonWrapper
                onClick={handleCancel}
                text={"Cancel"}
                className={"text-[#F5F3C2]"}
              />
              <ButtonWrapper
                type="submit"
                // onClick={handleAttachClick}
                text={"Attach photo"}
                className={`${
                  !selectedFile && "opacity-50 cursor-not-allowed"
                } bg-[#F5F3C2] text-black`}
                // disabled={!selectedFile}
                disabled={true}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalPfp;

export function ButtonWrapper({
  text,
  className,
  onClick,
  disabled,
  type = "button",
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`active:scale-95 transition duration-100 sm:w-auto text-center py-3 px-5 sm:px-8 rounded-2xl cursor-pointer ${className}`}
    >
      {pending ? (
        <div className="relative flex items-center justify-center">
          <span className="opacity-0">{text}</span>
          <div className="absolute">
            <LoadingRing
              width={"19.6px"}
              height={"19.6px"}
              colors={["#000000"]}
            />
          </div>
        </div>
      ) : (
        text
      )}
    </button>
  );
}
