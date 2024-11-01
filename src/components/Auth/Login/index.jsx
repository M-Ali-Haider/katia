"use client";
import Link from "next/link";
import { useState } from "react";
import EmailSequence from "./email";
import OTPSequence from "./otp";
import PasswordSequence from "./password";
const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEmailSequenceComplete, setEmailSequenceStatus] = useState(false);
  const [isPasswordSequenceComplete, setPasswordSequenceStatus] =
    useState(false);

  return (
    <div className="text-white font-inter 3xl:max-w-[500px] max-w-[360px] w-full mt-12 sm:my-20">
      {!isEmailSequenceComplete ? (
        <EmailSequence
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          setEmailSequenceStatus={setEmailSequenceStatus}
        />
      ) : !isPasswordSequenceComplete ? (
        <PasswordSequence
          setPasswordSequenceStatus={setPasswordSequenceStatus}
        />
      ) : (
        <OTPSequence />
      )}
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
