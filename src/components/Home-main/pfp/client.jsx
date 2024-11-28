"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import DropdownMenu from "./dropdownMenu";

const Pfp = ({ pfp }) => {
  const [isDropDownOpen, setDropDownStatus] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        setDropDownStatus(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="absolute top-4 right-4 w-9 h-9 pfp:w-12 pfp:h-12 z-[1]">
      <div className="w-full h-full relative">
        <DropdownMenu
          containerRef={dropdownRef}
          isDropDownOpen={isDropDownOpen}
        />
      </div>
      <Image
        ref={triggerRef}
        onClick={() => setDropDownStatus(!isDropDownOpen)}
        src={pfp}
        alt="pfp image"
        // width={48}
        // height={48}
        fill
        className="rounded-full cursor-pointer active:scale-95 duration-150 ease-custom-ease"
      />
    </div>
  );
};

export default Pfp;
