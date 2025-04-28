import { contactUsCards } from "@/utils/contactUsCard";
import PricingHeading from "./top";
import ShareSVG from "@/assets/ContactUs/share";

const ContactUs = () => {
  return (
    <>
      <div className="py-12 sm:py-28" id="pricing">
        <PricingHeading />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {contactUsCards.map(({ Svg, href, title }, index) => (
            <a
              key={index}
              target="_blank"
              href={href}
              className={`flex items-center justify-between
              p-6 ${title === "IRC Cloud" && "pb-[14px]"}
              rounded-xl
              bg-[#212228] hover:bg-[#F5F3C2] text-[#F3F1BC] hover:text-[#111116]
              transition-all duration-300 group`}
            >
              <div className="text-white group-hover:text-[#111116]">
                <Svg />
                <div className="mt-3 font-[600] text-2xl font-polySans">
                  {title}
                </div>
                {title === "IRC Cloud" && (
                  <div className="mt-1 text-[#898882]">
                    Network: Rizon&nbsp;&nbsp;&nbsp;Channel: #Katia
                  </div>
                )}
              </div>
              <div className="">
                <ShareSVG />
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
