import CustomButton from "@/components/CustomButton";
import Heading from "@/components/Settings/heading";
import InputField from "@/components/Settings/inputField";

const ChangePasswordPage = () => {
  return (
    <div className="pb-10">
      <Heading text={"Change Password"} className={"mb-4"} />
      <div className="p-8 border rounded-xl">
        <h3 className="text-2xl font-medium">Create New Password.</h3>
        <form className="max-w-[325px] mt-10">
          <div className="flex flex-col gap-6">
            <InputField
              labelText={"Old Password"}
              type={"password"}
              placeholder={"•••••••••••••••"}
            />
            <InputField
              labelText={"Old Password"}
              type={"password"}
              placeholder={"•••••••••••••••"}
            />
            <InputField
              labelText={"Old Password"}
              type={"password"}
              placeholder={"•••••••••••••••"}
            />
          </div>
          <CustomButton className={"mt-10"} text={"Change Password"} />
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
