"use client";
import ContinueArrowSVG from "@/assets/Auth/continue";
import GoogleSVG from "@/assets/Auth/google";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import InputField from "../inputfield";
const Register = () => {
  return (
    <div className="text-white font-inter 3xl:max-w-[500px] max-w-[360px] w-full mt-12 sm:my-20">
      <div className="text-[28px] leading-[33.6px] font-semibold mt-10 3xl:text-4xl">
        Sign in
      </div>
      <div className="mt-[18px] text-[#898A96] mb-10 3xl:text-lg">
        Enter your details to continue.
      </div>
      <div className="flex flex-col gap-5 w-full">
        <InputField
          type={"text"}
          placeholder={"First Name"}
          label={"First Name*"}
        />
        <InputField type={"text"} placeholder={"Surname"} label={"Surname*"} />
        <InputField
          type={"text"}
          placeholder={"Enter your email"}
          label={"Email*"}
        />
        <InputField
          type={"text"}
          placeholder={"Enter your username"}
          label={"Username*"}
        />
      </div>
      <div className="my-6 w-full flex justify-center">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}
          theme="dark"
        />
      </div>
      <ContinueButton />
      <SignUpGoogle />
      <AlreadyHaveAccount />
    </div>
  );
};

export default Register;

function AlreadyHaveAccount() {
  return (
    <div className="w-full text-center text-sm leading-[19.6px] mt-10 3xl:text-base">
      Already have an account?&nbsp;
      <Link href="/login" className="text-[#9773FF]">
        Sign in
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
    <div className="cursor-pointer w-full bg-[#F5F3C2] text-[#191B31] rounded-lg flex items-center justify-center gap-2 py-[14px] 3xl:py-[18px]">
      <span className="text-sm 3xl:text-base leading-[19.6px] font-medium">
        Continue
      </span>
      <ContinueArrowSVG className="mt-[2px]" />
    </div>
  );
}
