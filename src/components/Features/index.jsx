import FeatureGrid from "./grid";

const Features = () => {
  return (
    <>
      <div className="py-[120px]" id="features">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="max-w-[621px] font-polySans text-3xl sm:text-[40px] sm:leading-[56px] text-white">
            Ground-breaking Features for Unrivalled Outcomes
          </div>
          <div className="h-full flex flex-col items-end">
            <div className="py-3 px-8 rounded-2xl text-[#EBE9DE] border-[#5F5F5F] border border-solid">
              Get started
            </div>
          </div>
        </div>
        <FeatureGrid />
      </div>
    </>
  );
};

export default Features;
