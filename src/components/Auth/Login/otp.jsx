import { checkOTP } from "@/actions/actions";
import { useState } from "react";
import OTPInput from "react-otp-input";
import SubmitButton from "./submitButton";
import { useFormState } from "react-dom";
import InputField from "../inputfield";
import AuthLogoSVG from "@/assets/Auth/logo";

const OTPSequence = () => {
  const [state, formAction] = useFormState(checkOTP, undefined);

  return (
    <>
      <AuthLogoSVG className="w-16 h-16 3xl:w-24 3xl:h-24" />
      <div className="text-[24px] leading-[33.6px] font-semibold mt-10 3xl:text-3xl">
        Two-Factor Authentication
      </div>
      <div className="mt-[18px] text-[#898A96] mb-10 text-sm 3xl:text-base">
        A unique code has been sent to your email address. Please check your
        inbox and enter the code below to complete the login process.
      </div>
      <form action={formAction}>
        <InputField
          type={"text"}
          placeholder={"Authentication Code"}
          label={"OTP*"}
          name={"otp"}
          hasError={state?.error}
        />
        {state?.error && (
          <p className="text-[#EC6853] text-xs mt-5">{state.error}</p>
        )}
        <SubmitButton text={"Verify"} className={"mt-6"} />
      </form>
    </>
  );
};

export default OTPSequence;
