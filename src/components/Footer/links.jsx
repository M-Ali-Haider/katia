import { footerLinks } from "@/utils/footerLinks";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="gap-4 sm:gap-10 flex flex-wrap items-center">
      {footerLinks.map((item, index) => (
        <Link key={index} className="text-[#FCFCFC]" href={item.href}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
