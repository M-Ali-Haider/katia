"use client";
import { changePassword } from "@/actions/authenticatedActions";
import CustomButton from "@/components/CustomButton";
import Heading from "@/components/Settings/heading";
import InputField from "@/components/Settings/inputField";
import { useFormState } from "react-dom";

const ChangePasswordPage = () => {
  const [state, formAction] = useFormState(changePassword, undefined);
  return (
    <div className="pb-10">
      <Heading text={"Change Password"} className={"mb-4"} />
      <div className="p-8 border rounded-xl">
        <h3 className="text-2xl font-medium">Create New Password.</h3>
        <form action={formAction} className="max-w-[325px] mt-10">
          <div className="flex flex-col gap-6">
            <InputField
              labelText={"Old Password"}
              type={"password"}
              placeholder={"•••••••••••••••"}
              name={"currentPassword"}
            />
            <InputField
              labelText={"New Password"}
              type={"password"}
              placeholder={"•••••••••••••••"}
              name={"newPassword"}
            />
          </div>
          {state?.error && (
            <p className="text-[#F04438] font-inter text-xs my-4">
              {state.error}
            </p>
          )}
          {state?.success && (
            <p className="text-green-500 font-inter text-xs my-4">
              {state.success}
            </p>
          )}
          <CustomButton className={"mt-10"} text={"Change Password"} />
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
