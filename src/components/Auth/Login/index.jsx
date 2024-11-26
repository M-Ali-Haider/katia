"use client";
import { login } from "@/actions/actions";
import AuthLogoSVG from "@/assets/Auth/logo";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import InputField from "../inputfield";
import GoogleAuthButton from "../signUpGoogle";
import DontHaveAccount from "./dontHaveAccount";
import SubmitButton from "./submitButton";
import PasswordField from "../passwordfield";

const Login = () => {
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);
  const [state, formAction, pending] = useFormState(login, undefined);
  const handleRecaptchaChange = (value) => {
    setRecaptchaCompleted(!!value);
  };
  return (
    <div className="text-white font-inter 3xl:max-w-[500px] max-w-[360px] w-full mt-12 sm:my-20">
      <AuthLogoSVG className="w-16 h-16 3xl:w-24 3xl:h-24" />
      <div className="text-[28px] leading-[33.6px] font-semibold mt-10 3xl:text-4xl">
        Sign in
      </div>
      <div className="mt-[18px] text-[#898A96] mb-10 3xl:text-lg">
        Welcome to Katia. Sign in to continue.
      </div>

      <form action={formAction}>
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
          className={"mt-5"}
        />
        {state?.error && (
          <p className="text-[#F04438] font-inter text-xs my-4">
            {state.error}
          </p>
        )}
        <div className="text-[#F5F3C2] text-sm font-medium font-inter my-6 w-full flex items-center justify-center">
          <Link href="/forgot-password" className="select-none">
            Forgot your password?
          </Link>
        </div>
        <div className="my-6 w-full flex justify-center">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}
            theme="dark"
            onChange={handleRecaptchaChange}
          />
        </div>
        <SubmitButton
          text={"Sign in"}
          pending={pending}
          className={"mt-6"}
          disabled={!recaptchaCompleted}
        />
        <GoogleAuthButton />
      </form>

      <DontHaveAccount />
    </div>
  );
};

export default Login;
