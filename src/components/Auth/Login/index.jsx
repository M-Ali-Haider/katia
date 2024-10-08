"use client";
import AuthLogoSVG from "@/assets/Auth/logo";
import InputField from "../inputfield";
import Checkbox from "../checkbox";
import { useState } from "react";
import ContinueArrowSVG from "@/assets/Auth/continue";
import GoogleSVG from "@/assets/Auth/google";
import Link from "next/link";
const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="text-white font-inter max-w-[360px] w-full">
      <div>
        <AuthLogoSVG />
      </div>
      <div className="text-[28px] leading-[33.6px] font-semibold mt-10">
        Sign in
      </div>
      <div className="mt-[18px] text-[#898A96] mb-10">
        Welcome to Katia. Sign in to continue.
      </div>
      <InputField type={"text"} placeholder={"Enter your email"} />
      <div className="flex items-center gap-2 mt-5">
        <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
        <div className="text-sm">Keep me signed in</div>
      </div>
      <div className="cursor-pointer mt-6 w-full bg-[#898A96] rounded-lg flex items-center justify-center gap-2 py-[14px]">
        <span className="text-sm leading-[19.6px] font-medium">Continue</span>
        <ContinueArrowSVG className="mt-[2px]" />
      </div>
      <div className="mt-4 bg-[#191B31] w-full rounded-lg flex items-center justify-center gap-3 py-3">
        <GoogleSVG />
        <span className="text-sm leading-[19.6px] font-medium">
          Sign up with Google
        </span>
      </div>
      <div className="w-full text-center text-sm leading-[19.6px] mt-10">
        Don&apos;t have an account?&nbsp;
        <Link href="/register" className="text-[#9773FF]">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
