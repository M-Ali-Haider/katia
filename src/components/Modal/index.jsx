import CrossSVG from "@/assets/closeSvg";
import { useEffect, useRef } from "react";

const ModalWrapper = ({ title, children, isModalOpen, setIsModalOpen }) => {
  const modalRef = useRef(null);
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
          <div className="text-lg md:text-2xl">{title}</div>
          <button onClick={() => setIsModalOpen(false)}>
            <CrossSVG />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
