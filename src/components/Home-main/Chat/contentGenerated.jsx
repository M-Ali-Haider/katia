import { displayPfp } from "@/actions/actions";
import CopySVG from "@/assets/Content/copy";
import ChatLogoSVG from "@/assets/Content/logo";
import Image from "next/image";
import MarkdownRenderer from "./MarkdownRenderer";
import { useEffect, useState } from "react";

const ContentGenerated = ({
  container,
  conversationMessages,
  isLoading,
  error,
}) => {
  const [pfp, setPfp] = useState("/userPlaceholder.jpg");
  useEffect(() => {
    const fetchProfilePicture = async () => {
      const profilePicture = await displayPfp();
      setPfp(profilePicture);
    };
    fetchProfilePicture();
  }, []);

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
    <div
      ref={container}
      className="w-full h-full flex flex-col gap-6 overflow-y-scroll text-sm sm:text-base pb-8 pt-4 sm:pt-9"
    >
      {conversationMessages.map((item, index) => (
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
                ? "rounded-tl-lg rounded-bl-lg border-r-2 border-[#F5F3C2] max-w-[calc(100vw-96px)] sm:max-w-[500px]"
                : "rounded-tr-lg rounded-br-lg border-l-2 border-[#9773FF] max-w-[calc(100vw-96px)] sm:max-w-[500px]"
            }   bg-[#0E0F21] p-6`}
          >
            <MarkdownRenderer markdownContent={item.content} />
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
                <Image src={pfp} fill alt="user pfp" />
              </div>
            </div>
          )}
        </div>
      ))}

      {isLoading && (
        <div className={`w-full flex gap-[10px]`}>
          <div>
            <ChatLogoSVG />
          </div>

          <div
            className={`flex flex-col px-4 gap-4 rounded-tr-lg rounded-br-lg border-l-2 border-[#9773FF] max-w-full py-4 bg-[#0E0F21] sm:max-w-[500px] w-full`}
          >
            <div
              className="w-full h-6 relative before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent
                        before:via-white/5
                        before:animate-[shimmerX_1.5s_infinite] overflow-hidden"
            />
            <div
              className="w-full h-6 relative before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent
                        before:via-white/5
                        before:animate-[shimmerX_1.5s_infinite] overflow-hidden"
            />
            <div
              className="w-full h-6 relative before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent
                        before:via-white/5
                        before:animate-[shimmerX_1.5s_infinite] overflow-hidden"
            />
          </div>
        </div>
      )}
      {error && <div>Error in creating message API {error}</div>}
    </div>
  );
};

export default ContentGenerated;
