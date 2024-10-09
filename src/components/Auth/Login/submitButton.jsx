import ContinueArrowSVG from "@/assets/Auth/continue";

export default function SubmitButton({ text, className }) {
  return (
    <button
      className={`${className} cursor-pointer w-full bg-[#F5F3C2] text-[#191B31] rounded-lg flex items-center justify-center gap-2 py-[14px] 3xl:py-[18px]`}
    >
      <span className="text-sm 3xl:text-base leading-[19.6px] font-medium">
        {text}
      </span>
      <ContinueArrowSVG className="mt-[2px]" />
    </button>
  );
}
