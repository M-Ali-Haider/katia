import HeaderLogoSVG from "@/assets/Header/logo";
import ActiveLinks from "./activeLinks";

const Header = () => {
  return (
    <header className="hidden md:flex fixed z-50 top-[11px] right-0 left-0 items-center justify-center px-6">
      <div className="max-w-[1216px] w-full rounded-2xl flex items-center bg-[#25262D] text-[#EBE9DE] px-6 h-[77px]">
        <div className="h-full py-6 flex items-center">
          <HeaderLogoSVG />
        </div>
        <ActiveLinks />
        <div className="py-5 h-full flex items-center">
          <div className="text-sm px-6 py-2 cursor-pointer rounded-2xl border border-solid border-[#5F5F5F]">
            Log in
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
