"use client";
import { signup } from "@/actions/actions";
import { useState } from "react";
import { useFormState } from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import InputField from "../inputfield";
import SubmitButton from "../Login/submitButton";
import GoogleAuthButton from "../signUpGoogle";
import AlreadyHaveAccount from "./alreadyAccount";
import PasswordField from "../passwordfield";

const Register = () => {
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);
  const [state, formAction] = useFormState(signup, undefined);
  const handleRecaptchaChange = (value) => {
    setRecaptchaCompleted(!!value);
  };

  return (
    <form
      action={formAction}
      className="text-white font-inter 3xl:max-w-[500px] max-w-[360px] w-full mt-12 sm:my-20"
    >
      <div className="text-[28px] leading-[33.6px] font-semibold mt-10 3xl:text-4xl">
        Sign Up
      </div>
      <div className="mt-[18px] text-[#898A96] mb-10 3xl:text-lg">
        Enter your details to continue.
      </div>
      <div className="flex flex-col gap-5 w-full">
        <InputField
          type={"text"}
          placeholder={"Enter your name"}
          label={"Full Name*"}
          name="fullName"
          hasError={state?.error}
        />
        <InputField
          type={"text"}
          placeholder={"Enter your email"}
          label={"Email*"}
          name="email"
          hasError={state?.error}
        />
        <PasswordField
          placeholder={"Enter your password"}
          label={"Password*"}
          name="password"
          hasError={state?.error}
        />
      </div>
      {state?.error && (
        <p className="text-[#F04438] font-inter text-xs my-4">{state.error}</p>
      )}
      <div className="my-6 w-full flex justify-center">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}
          theme="dark"
          onChange={handleRecaptchaChange}
        />
      </div>
      <SubmitButton text={"Continue"} disabled={!recaptchaCompleted} />
      <GoogleAuthButton />
      <AlreadyHaveAccount />
    </form>
  );
};

export default Register;
