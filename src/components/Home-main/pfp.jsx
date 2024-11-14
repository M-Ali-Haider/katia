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
    <div className="absolute top-4 right-4 w-9 h-9 sm:w-12 sm:h-12">
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
        className="rounded-full cursor-pointer"
      />
    </div>
  );
};

export default Pfp;
