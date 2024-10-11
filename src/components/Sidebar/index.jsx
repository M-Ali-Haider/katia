"use client";
import { useDispatch, useSelector } from "react-redux";
import AIKatiaPlusButton from "../AIKatiaPlus";
import History from "./history";
import ProfileDetails from "./profileDetails";
import { closeSidebar } from "@/store/sidebar";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  return (
    <div
      className={`${
        isSidebarOpen
          ? `left-0 sm:w-[315px] pointer-events-auto`
          : `-left-[315px] sm:w-0 pointer-events-none`
      } h-screen max-h-screen overflow-x-hidden flex 
      duration-500 ease-custom-ease transition-all
      fixed top-0 right-0 bottom-0 z-10 sm:static`}
    >
      <div className="w-[315px] px-5 bg-[#0E0F21] border-r border-[#353741] h-screen max-h-screen flex flex-col">
        <ProfileDetails className={"mt-10"} />
        <AIKatiaPlusButton className={"mt-[30px]"} />
        <History />
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
