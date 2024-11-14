import { getSession } from "@/actions/actions";
import ResetPassword from "@/components/Auth/ResetPassword";
import { redirect } from "next/navigation";

const ResetPasswordPage = async () => {
  const session = await getSession();
  if (session.userId) {
    return <ResetPassword />;
  }
  redirect("/login");
};

export default ResetPasswordPage;
