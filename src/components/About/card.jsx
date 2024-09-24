const AboutCard = ({ item }) => {
  return (
    <>
      <div className="bg-[#18181C] rounded-xl p-6 sm:max-w-[392px]">
        {item.svgComp}
        <div className="font-bold text-white text-base leading-[22.4px] mt-4">
          {item.desc}
        </div>
      </div>
    </>
  );
};

export default AboutCard;
