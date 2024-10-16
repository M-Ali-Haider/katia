import CopySVG from "@/assets/Content/copy";
import ChatLogoSVG from "@/assets/Content/logo";
import { chat } from "@/utils/chat";
import Image from "next/image";

const ContentGenerated = () => {
  const handleCopy = (content) => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        console.log("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="w-full h-full flex flex-col gap-6 overflow-y-scroll text-sm sm:text-base pb-8 pt-4 sm:pt-9">
      {chat.map((item, index) => (
        <div
          key={index}
          className={`w-full flex gap-[10px] ${
            item.role === "user" && "justify-end"
          }`}
        >
          {item.role === "assistant" && (
            <div>
              <ChatLogoSVG />
            </div>
          )}

          <div
            className={`${
              item.role === "user"
                ? "rounded-tl-lg rounded-bl-lg border-r-2 border-[#F5F3C2] max-w-[210px]"
                : "rounded-tr-lg rounded-br-lg border-l-2 border-[#9773FF] max-w-full"
            }  py-4 px-3 bg-[#0E0F21] sm:max-w-[500px]`}
          >
            {item.content}
          </div>

          {/* Copy UI */}
          {item.role === "assistant" && (
            <div
              onClick={() => handleCopy(item.content)}
              className="w-7 h-7 flex items-center justify-center hover:bg-[#0E0F21] 
              transition duration-100 cursor-pointer rounded-md -ml-1 active:scale-90"
            >
              <CopySVG className="w-[18px] h-[18px]" />
            </div>
          )}

          {item.role === "user" && (
            <div className="">
              <div className={`w-6 h-6 rounded-full overflow-hidden relative`}>
                <Image src={"/user.png"} fill alt="user pfp" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentGenerated;
