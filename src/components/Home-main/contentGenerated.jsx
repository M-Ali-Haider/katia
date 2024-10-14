import ChatLogoSVG from "@/assets/Content/logo";
import { chat } from "@/utils/chat";
import Image from "next/image";

const ContentGenerated = () => {
  return (
    <div className="w-full h-full pt-14 flex flex-col gap-6 overflow-y-scroll">
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
