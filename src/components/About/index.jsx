import Image from "next/image";
import AboutImage from "./image";
import AboutDetails from "./details";

const AboutUs = () => {
  return (
    <>
      <div
        className="flex flex-wrap gap-10 justify-between sm:py-[140px]"
        id="about"
      >
        <AboutImage />
        <AboutDetails />
      </div>
    </>
  );
};

export default AboutUs;
