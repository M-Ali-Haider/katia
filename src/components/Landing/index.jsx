import ArrowSVG from "@/assets/Landing/arrow";
import Introducing from "./introducing";
import Redefining from "./redefining";
import GetStarted from "./getStarted";
import Image from "next/image";

const Landing = () => {
  return (
    <>
      <div
        className="max-w-[1256px] pt-[calc(77px+60px)] sm:pt-[calc(11px+77px+112px)]"
        id="home"
      >
        <Introducing />
        <div className="flex landing:flex-row flex-col justify-between mt-5 gap-6">
          <Redefining />
          <GetStarted />
        </div>
      </div>
      <div className="mt-[60px] mb-[40px] sm:mb-0 sm:mt-28 relative aspect-[1257/618]">
        <Image
          src={"/landing.png"}
          alt="landing page image"
          fill
          loading="eager"
        />
      </div>
    </>
  );
};

export default Landing;
