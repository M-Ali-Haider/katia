import { activeLinks, scrollToSection } from "@/utils/activeLinks";
import LegalDropdown from "./LegalDropdown";

const Dropdown = ({ isLegal, setDropDownStatus }) => {
  const handleOptionClick = (id) => {
    setDropDownStatus(false);
    scrollToSection(id);
  };
  const closeDropdown = () => {
    setDropDownStatus(false);
  };
  return (
    <>
      {isLegal ? (
        <LegalDropdown closeDropdown={closeDropdown} />
      ) : (
        <div className="absolute right-0 top-[calc(100%+16px)] flex flex-col gap-5 rounded-2xl py-[36.5px] w-[288px] bg-[#25262D] shadow-lg">
          {activeLinks.map((item, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(item.id)}
              className={`pl-[30px]`}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;
