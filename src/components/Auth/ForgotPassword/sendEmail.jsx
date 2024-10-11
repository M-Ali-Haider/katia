import ForgotPasswordSVG from "@/assets/Auth/forgotPassword";
import InputField from "../inputfield";
import SubmitButton from "../Login/submitButton";

const SendEmail = ({ setIsEmailComplete }) => {
  return (
    <>
      <ForgotPasswordSVG className="w-16 h-16 lg:w-24 lg:h-24 3xl:w-24 3xl:h-24" />
      <div className="text-[28px] leading-[33.6px] font-semibold mt-10 3xl:text-4xl">
        Forgot your password?
      </div>
      <div className="mt-[18px] text-[#898A96] mb-10 3xl:text-lg">
        Enter your email to receive a reset link.
      </div>
      {/* This should be a form not a div but for UI purposes I am making this a div */}
      <div className="mt-10">
        <InputField
          type={"text"}
          label={"Email*"}
          name={"email"}
          placeholder={"Enter your email"}
        />
        <SubmitButton
          onClick={() => setIsEmailComplete(true)}
          className={`mt-6`}
          text={"Continue"}
          pending={false}
        />
      </div>
    </>
  );
};

export default SendEmail;
