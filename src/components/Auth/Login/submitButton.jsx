import ContinueArrowSVG from "@/assets/Auth/continue";
import LoadingRing from "@/components/LoadingRing";

export default function SubmitButton({ text, className, pending, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${className} active:scale-95 transition duration-100 cursor-pointer w-full bg-[#F5F3C2] text-[#191B31] rounded-lg flex items-center justify-center gap-2 py-[14px] 3xl:py-[18px]`}
    >
      {pending ? (
        <LoadingRing width={"19.6px"} height={"19.6px"} colors={["#000000"]} />
      ) : (
        <>
          <span className="text-sm 3xl:text-base leading-[19.6px] font-medium">
            {text}
          </span>
          <ContinueArrowSVG className="mt-[2px]" />
        </>
      )}
    </button>
  );
}
