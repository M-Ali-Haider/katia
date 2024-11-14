"use client";
import { forgotPassword } from "@/actions/actions";
import BackToArrowSVG from "@/assets/Auth/backArrow";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import SendEmail from "./sendEmail";
import CheckEmail from "./checkEmail";
const ForgotPassword = () => {
  const [isSucess, setIsSuccess] = useState(false);
  const [state, formAction, pending] = useFormState(forgotPassword, undefined);
  useEffect(() => {
    if (state?.success) {
      const timer = setTimeout(() => {
        setIsSuccess(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [state]);
  return (
    <div className="text-white font-inter 3xl:max-w-[500px] max-w-[360px] w-full mt-12 sm:my-20">
      {!isSucess ? (
        <SendEmail state={state} formAction={formAction} pending={pending} />
      ) : (
        <CheckEmail email={state?.email} />
      )}
      {/* <SendEmail state={state} formAction={formAction} pending={pending} /> */}
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
