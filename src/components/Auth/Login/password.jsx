import { checkPassword } from "@/actions/actions";
import Link from "next/link";
import { useFormState } from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import InputField from "../inputfield";
import SignUpGoogle from "./google";
import SubmitButton from "./submitButton";

const PasswordSequence = () => {
  const [state, formAction] = useFormState(checkPassword, undefined);

  return (
    <>
      <form action={formAction}>
        <InputField
          type={"text"}
          placeholder={"Enter your password"}
          label={"Password*"}
          name={"password"}
        />
        {state?.error && (
          <p className="text-[#EC6853] text-xs mt-5">{state.error}</p>
        )}
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
      </form>
    </>
  );
};

export default PasswordSequence;
