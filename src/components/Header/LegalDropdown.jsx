import { legalLinks } from "@/utils/legalLinks";
import Link from "next/link";

const LegalDropdown = ({ closeDropdown }) => {
  return (
    <div className="absolute right-0 top-[calc(100%+16px)] flex flex-col gap-5 rounded-2xl py-[36.5px] w-[288px] bg-[#25262D] shadow-lg">
      {legalLinks.map((item, index) => (
        <Link
          onClick={() => closeDropdown()}
          href={item.href}
          key={index}
          className={`pl-[30px]`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default LegalDropdown;
