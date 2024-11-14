"use client";
import { initiateGoogleAuth } from "@/actions/actions";
import GoogleSVG from "@/assets/Auth/google";

const GoogleAuthButton = () => {
  const handleGoogleAuth = async () => {
    await initiateGoogleAuth();
  };
  return (
    <div
      onClick={handleGoogleAuth}
      className="active:scale-95 transition duration-100 mt-4 bg-[#191B31] w-full rounded-lg flex items-center justify-center gap-3 py-3 3xl:py-4 cursor-pointer"
    >
      <GoogleSVG />
      <span className="text-sm 3xl:text-base leading-[19.6px] font-medium">
        Sign up with Google
      </span>
    </div>
  );
};

export default GoogleAuthButton;
