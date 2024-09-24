import Grid from "./grid";

const AboutDetails = () => {
  return (
    <div className="flex-1 sm:min-w-[500px]">
      <div className="text-[#EBE9DE] text-base py-2 px-6 bg-[#25262D] rounded-full max-w-max mb-5">
        About Us
      </div>
      <div className="font-polySans text-3xl sm:text-[40px] sm:leading-[48px] text-[#DADBDE] mb-[60px]">
        <p>Conversational AI</p>
        <p>(I can talk to you like a human being)</p>
      </div>
      <Grid />
    </div>
  );
};

export default AboutDetails;
