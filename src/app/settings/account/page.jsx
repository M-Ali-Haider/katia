import Heading from "@/components/Settings/heading";
import Image from "next/image";

const AccountPage = () => {
  return (
    <div>
      <Heading text={"Account Details"} className={"mb-4"} />
      <div className="p-8 border rounded-xl">
        <h3 className="text-2xl font-medium mb-8">Account</h3>
        <div className="flex flex-col gap-6">
          <div className="w-[120px] h-[120px] rounded-full relative overflow-hidden">
            <Image
              src={"/user.png"}
              fill
              alt="change pfp image"
              className="z-[1]"
            />
          </div>
          <AccountInfo label={"Name"} value={"Marvin Frankie"} />
          <AccountInfo label={"Email"} value={"m*****00@gmail.com"} />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

const AccountInfo = ({ label, value }) => {
  return (
    <div>
      <label htmlFor="" className="mb-2 font-medium">
        {label}
      </label>
      <div>{value}</div>
    </div>
  );
};
