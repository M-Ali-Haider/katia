const FeatureCard = ({ item }) => {
  return (
    <>
      <div className="p-6 rounded-xl bg-[#101010]">
        {item.svgComp}
        {/* <div className="my-4 font-polySans text-[20px] leading-[28px] text-white">
          {item.title}
        </div> */}
        <div className="mt-[30px] text-xl leading-[30px] text-[#898A96]">
          {item.desc}
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
