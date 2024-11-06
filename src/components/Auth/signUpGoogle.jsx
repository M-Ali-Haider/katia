import GoogleSVG from "@/assets/Auth/google";

const SignUpGoogle = () => {
  return (
    <div className="active:scale-95 transition duration-100 mt-4 bg-[#191B31] w-full rounded-lg flex items-center justify-center gap-3 py-3 3xl:py-4 cursor-pointer">
      <GoogleSVG />
      <span className="text-sm 3xl:text-base leading-[19.6px] font-medium">
        Sign up with Google
      </span>
    </div>
  );
};

export default SignUpGoogle;
