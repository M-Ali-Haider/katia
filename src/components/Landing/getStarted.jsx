const GetStarted = () => {
  return (
    <div className="flex flex-col landing:max-w-[636px] flex-1">
      <div className=" flex flex-col gap-5 text-sm sm:text-base text-[#898A96] mb-8">
        <p>
          Experience the future of AI with AI katia Assistant — designed to
          learn, adapt, and integrate seamlessly into your daily life.
        </p>
        <p>
          Whether you&apos;re managing tasks, needing quick information, or
          seeking efficient workflow solutions, Synth is here to enhance your
          productivity and simplify your technology interactions.
        </p>
      </div>
      <div className="flex flex-wrap text-sm sm:text-base items-center gap-2">
        <ButtonWrapper
          text={"Get started with AI katia"}
          className={"bg-[#EBE9DE] text-black"}
        />
        <ButtonWrapper
          text={"Watch demo"}
          className={"border border-solid border-[#5F5F5F] text-[#EBE9DE]"}
        />
      </div>
    </div>
  );
};

export default GetStarted;

function ButtonWrapper({ text, className }) {
  return (
    <div
      className={`py-3 px-5 sm:px-8 rounded-2xl cursor-pointer ${className}`}
    >
      {text}
    </div>
  );
}
