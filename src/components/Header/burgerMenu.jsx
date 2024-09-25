"use client";
import BurgerMenuSVG from "@/assets/Header/burgerMenu";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

const BurgerMenu = () => {
  const [isDropDownOpen, setDropDownStatus] = useState(false);

  useEffect(() => {
    if (isDropDownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDropDownOpen]);

  return (
    <div className={`md:hidden block w-[30px] h-[30px] relative`}>
      <div
        onClick={() => setDropDownStatus(isDropDownOpen ? false : true)}
        className={`${
          isDropDownOpen && "bg-[#25262D]"
        } flex items-center justify-center rounded-[4px] w-full h-full`}
      >
        <BurgerMenuSVG />
      </div>

      {isDropDownOpen && <Dropdown setDropDownStatus={setDropDownStatus} />}
    </div>
  );
};

export default BurgerMenu;
