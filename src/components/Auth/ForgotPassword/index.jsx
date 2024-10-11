"use client";
import BackToArrowSVG from "@/assets/Auth/backArrow";
import Link from "next/link";
import SendEmail from "./sendEmail";
import { useState } from "react";
import CheckEmail from "./checkEmail";
const ForgotPassword = () => {
  const [isSendEmailComplete, setIsEmailComplete] = useState(false);
  return (
    <div className="text-white font-inter 3xl:max-w-[500px] max-w-[360px] w-full mt-12 sm:my-20">
      {!isSendEmailComplete ? (
        <SendEmail setIsEmailComplete={setIsEmailComplete} />
      ) : (
        <CheckEmail />
      )}
      <Link
        href="/login"
        className="mt-10 w-full flex gap-2 items-center justify-center"
      >
        <BackToArrowSVG />
        <span className="text-sm leading-[19.6px]">Back to Sign in</span>
      </Link>
    </div>
  );
};

export default ForgotPassword;
