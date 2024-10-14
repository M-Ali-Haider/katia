"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Option = ({ href, title }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`block text-base leading-[16px] pl-3 py-3 border-l-2 ${
        pathName === href
          ? "border-[#F5F3C2] text-[#F5F3C2]"
          : "border-[#898A96] text-[#898A96]"
      } hover:text-[#F5F3C2] transition-colors duration-300`}
    >
      {title}
    </Link>
  );
};

export default Option;
