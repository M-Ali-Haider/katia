"use client";
import ForgotPasswordSVG from "@/assets/Auth/forgotPassword";
import Link from "next/link";
import { useState } from "react";
import EmailSequence from "../Login/email";
const ForgotPassword = () => {
  return (
    <div className="text-white font-inter 3xl:max-w-[500px] max-w-[360px] w-full mt-12 sm:my-20">
      <ForgotPasswordSVG className="w-16 h-16 3xl:w-24 3xl:h-24" />
      <div className="text-[28px] leading-[33.6px] font-semibold mt-10 3xl:text-4xl">
        Forgot your password?
      </div>
      <div className="mt-[18px] text-[#898A96] mb-10 3xl:text-lg">
        Enter your email so we can send reset link.
      </div>
      {/* <EmailSequence
        isForgotPassword={true}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        setEmailSequenceStatus={setEmailSequenceStatus}
      /> */}
      <DontHaveAccount />
    </div>
  );
};

export default ForgotPassword;

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
