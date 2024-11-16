"use client";
import { closeSidebar } from "@/store/sidebar";
import { useDispatch, useSelector } from "react-redux";
import SettingsSidebar from "./settings";
import { openDeleteConvoModal } from "@/store/modal/deleteConversation";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <div
      className={`${
        isSidebarOpen
          ? `left-0 pointer-events-auto`
          : `-left-[315px] pointer-events-none`
      } h-svh max-h-svh overflow-x-hidden flex 
      duration-500 ease-custom-ease transition-all
      fixed top-0 right-0 bottom-0 z-10 md:hidden`}
    >
      <div className="w-[315px] px-5 bg-[#0E0F21] border-r border-[#353741] h-svh max-h-svh flex flex-col">
        <SettingsSidebar />
        <div
          onClick={() => dispatch(openDeleteConvoModal())}
          className="text-[#EC6853] hover:text-[#fa6e59] duration-300 transition mt-4 cursor-pointer"
        >
          Clear Chat History
        </div>
      </div>
      <div
        onClick={() => dispatch(closeSidebar())}
        className={`${
          isSidebarOpen ? "bg-[#0000001a]" : "bg-transparent"
        } flex-1 duration-500 ease-custom-ease transition-all`}
      />
    </div>
  );
};
export default Sidebar;
