"use client";
import ForgotPasswordSVG from "@/assets/Auth/forgotPassword";
import SubmitButton from "../Login/submitButton";
import InputField from "../inputfield";
import { useFormState } from "react-dom";
import { resetPassword } from "@/actions/actions";
import PasswordField from "../passwordfield";

const ResetPassword = () => {
  const [state, formAction] = useFormState(resetPassword, undefined);
  return (
    <div className="text-white font-inter 3xl:max-w-[500px] max-w-[360px] w-full mt-12 sm:my-20">
      <ForgotPasswordSVG className="w-16 h-16 lg:w-24 lg:h-24 3xl:w-24 3xl:h-24" />
      <div className="text-[28px] leading-[33.6px] font-semibold mt-10 3xl:text-4xl">
        Reset Password
      </div>
      <div className="mt-[18px] text-[#898A96] mb-10 3xl:text-lg">
        Enter your new password.
      </div>
      <form action={formAction} className="mt-10">
        <PasswordField
          label={"Password*"}
          name={"password"}
          placeholder={"Enter your password"}
        />
        <PasswordField
          label={"Confirm Password*"}
          name={"confirmPassword"}
          placeholder={"Enter your Confirm password"}
          className={"mt-5"}
        />
        {state?.error && (
          <div className="mt-2 text-red-500 text-sm">{state.error}</div>
        )}
        {state?.success && (
          <div className="mt-2 text-green-500 text-sm">{state.success}</div>
        )}
        <SubmitButton className={`mt-6`} text={"Continue"} />
      </form>
    </div>
  );
};

export default ResetPassword;
