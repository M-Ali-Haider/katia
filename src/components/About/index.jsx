import Image from "next/image";
import AboutImage from "./image";
import AboutDetails from "./details";

const AboutUs = () => {
  return (
    <>
      <div
        className="flex flex-wrap-reverse gap-10 justify-between py-[140px]"
        id="about"
      >
        <AboutImage />
        <AboutDetails />
      </div>
    </>
  );
};

export default AboutUs;
