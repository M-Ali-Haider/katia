import { footerSocialLinks } from "@/utils/footerSocialLinks";

const FooterSocials = () => {
  return (
    <div className="flex items-center gap-5">
      {footerSocialLinks.map((item, index) => (
        <a key={index} href="">
          {item.svgComp}
        </a>
      ))}
    </div>
  );
};

export default FooterSocials;
