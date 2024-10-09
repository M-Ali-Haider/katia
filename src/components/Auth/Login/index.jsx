"use client";
import AuthLogoSVG from "@/assets/Auth/logo";
import Link from "next/link";
import { useState } from "react";
import PasswordSequence from "./password";
import EmailSequence from "./email";
const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="text-white font-inter 3xl:max-w-[500px] max-w-[360px] w-full mt-12 sm:my-20">
      <AuthLogoSVG className="w-16 h-16 3xl:w-24 3xl:h-24" />
      <div className="text-[28px] leading-[33.6px] font-semibold mt-10 3xl:text-4xl">
        Sign in
      </div>
      <div className="mt-[18px] text-[#898A96] mb-10 3xl:text-lg">
        Welcome to Katia. Sign in to continue.
      </div>
      <EmailSequence isChecked={isChecked} setIsChecked={setIsChecked} />
      {/* <PasswordSequence /> */}
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
