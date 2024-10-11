"use client";
import { handleSidebar } from "@/store/sidebar";
import { useDispatch, useSelector } from "react-redux";

const BurgerMenu = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(handleSidebar())}
      className="absolute top-1 left-1 border-none"
    >
      {isSidebarOpen ? "Close" : "Open"}
    </button>
  );
};

export default BurgerMenu;
