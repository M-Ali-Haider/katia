import HeaderLogoSVG from "@/assets/Header/logo";
import FooterLinks from "./links";
import FooterSocials from "./socials";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer
        className="flex flex-col footer:flex-row gap-8 footer:gap-10 footer:items-center footer:justify-center
       bg-[#25262D] rounded-[20px] py-[34px] px-[34px] footer:px-0 mb-5"
      >
        <div className="flex items-center h-9 gap-2">
          <div className="relative w-9 h-9">
            <Image src={"/katia_logo.png"} fill alt="new logo" />
          </div>
          <HeaderLogoSVG className="h-8" />
        </div>
        <div className="w-[1px] h-[27px] bg-[#EDEEF4] hidden footer:block" />
        <FooterLinks />
        <div className="w-[1px] h-[27px] bg-[#EDEEF4] hidden footer:block" />
        <FooterSocials />
      </footer>
    </>
  );
};

export default Footer;
