import { settings } from "@/utils/setings";
import Option from "./navOption";

const Navbar = () => {
  return (
    <div className="w-[288px]">
      <h1 className="text-[40px] leading-[48px] font-semibold mb-8">
        Settings
      </h1>
      <div className="flex flex-col gap-4">
        {settings.map((item, index) => (
          <div key={index} className="">
            <div className="text-2xl font-medium mb-3">{item.title}</div>
            <div>
              {item.subHeadings.map((option, index) => (
                <Option href={option.href} title={option.title} key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
