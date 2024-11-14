import OTP from "@/components/Auth/OTP";

const VerifyOTPPage = ({ searchParams }) => {
  const email = searchParams.email;
  const flow = searchParams.flow;
  return <OTP email={email} flow={flow} />;
};

export default VerifyOTPPage;
