"use client";
import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import SubmitButton from "../Login/submitButton";
import SignUpGoogle from "../signUpGoogle";
import { signup } from "@/actions/actions";
import InputField from "./inputField";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false);
  const handleRecaptchaChange = (value) => {
    setRecaptchaCompleted(!!value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaCompleted) return;

    try {
      const result = await signup({ firstName, lastName, email, password });
      if (result.success) {
        setOTPSequence(true);
        console.log("Signup successful:", result);
        // Handle any additional logic if needed
      } else {
        console.error("Signup error:", result.error || "Unknown error");
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
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
          placeholder={"First Name"}
          label={"First Name*"}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputField
          type={"text"}
          placeholder={"Surname"}
          label={"Surname*"}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputField
          type={"text"}
          placeholder={"Enter your email"}
          label={"Email*"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type={"password"}
          placeholder={"Enter your password"}
          label={"Password*"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="my-6 w-full flex justify-center">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}
          theme="dark"
          onChange={handleRecaptchaChange}
        />
      </div>
      <SubmitButton text={"Continue"} disabled={!recaptchaCompleted} />
      <SignUpGoogle />
      <AlreadyHaveAccount />
    </form>
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
