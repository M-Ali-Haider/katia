import Image from "next/image";

const AboutImage = () => {
  return (
    <div className="relative aspect-[412/518] sm:max-w-[412px] w-full">
      <Image
        src={"/aboutus.png"}
        alt="about us katia image"
        fill
        quality={100}
        loading="eager"
      />
    </div>
  );
};

export default AboutImage;
