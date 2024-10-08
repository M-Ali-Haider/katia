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
    <div className="text-white font-inter 3xl:max-w-[500px] max-w-[360px] w-full">
      <AuthLogoSVG className="w-16 h-16 3xl:w-24 3xl:h-24" />
      <div className="text-[28px] leading-[33.6px] font-semibold mt-10 3xl:text-4xl">
        Sign in
      </div>
      <div className="mt-[18px] text-[#898A96] mb-10 3xl:text-lg">
        Welcome to Katia. Sign in to continue.
      </div>
      <InputField
        type={"text"}
        placeholder={"Enter your email"}
        label={"Email*"}
      />
      <div className="flex items-center gap-2 3xl:gap-3 mt-5">
        <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
        <div className="text-sm 3xl:text-base">Keep me signed in</div>
      </div>
      <ContinueButton />
      <SignUpGoogle />
      <DontHaveAccount />
    </div>
  );
};

export default Login;

function DontHaveAccount() {
  return (
    <div className="w-full text-center text-sm leading-[19.6px] mt-10 3xl:text-base">
      Don&apos;t have an account?&nbsp;
      <Link href="/register" className="text-[#9773FF]">
        Sign up
      </Link>
    </div>
  );
}

function SignUpGoogle() {
  return (
    <div className="mt-4 bg-[#191B31] w-full rounded-lg flex items-center justify-center gap-3 py-3 3xl:py-4 cursor-pointer">
      <GoogleSVG />
      <span className="text-sm 3xl:text-base leading-[19.6px] font-medium">
        Sign up with Google
      </span>
    </div>
  );
}

function ContinueButton() {
  return (
    <div className="cursor-pointer mt-6 w-full bg-[#F5F3C2] text-[#191B31] rounded-lg flex items-center justify-center gap-2 py-[14px] 3xl:py-[18px]">
      <span className="text-sm 3xl:text-base leading-[19.6px] font-medium">
        Continue
      </span>
      <ContinueArrowSVG className="mt-[2px]" />
    </div>
  );
}
