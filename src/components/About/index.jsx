import Image from "next/image";
import AboutImage from "./image";
import AboutDetails from "./details";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-wrap-reverse gap-10 justify-between my-[140px]">
        <AboutImage />
        <AboutDetails />
      </div>
    </>
  );
};

export default AboutUs;
