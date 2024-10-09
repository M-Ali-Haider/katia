import Link from "next/link";
import Checkbox from "../checkbox";
import InputField from "../inputfield";
import SignUpGoogle from "./google";
import SubmitButton from "./submitButton";
import ReCAPTCHA from "react-google-recaptcha";

const PasswordSequence = () => {
  return (
    <>
      <InputField
        type={"text"}
        placeholder={"Enter your password"}
        label={"Password*"}
      />
      <div className="text-[#F5F3C2] text-sm font-medium font-inter my-6 w-full flex items-center justify-center">
        <Link href="/">Forgot your password?</Link>
      </div>
      <div className="my-6 w-full flex justify-center">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}
          theme="dark"
        />
      </div>
      <SubmitButton text={"Sign in"} />
      <SignUpGoogle />
    </>
  );
};

export default PasswordSequence;
