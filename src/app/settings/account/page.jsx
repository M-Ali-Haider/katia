import { getSession } from "@/actions/actions";
import Heading from "@/components/Settings/heading";
import UploadProfilePicture from "@/components/UploadProfilePicture";
import LoadLocalStoragePfp from "@/providers/loadLocalStoragePfp";

const AccountPage = async () => {
  const session = await getSession();
  return (
    <LoadLocalStoragePfp>
      <div>
        <Heading text={"Account Details"} className={"mb-4"} />
        <div className="p-8 border rounded-xl">
          <h3 className="text-2xl font-medium mb-8">Account</h3>
          <div className="flex flex-col gap-6">
            <UploadProfilePicture
            // pfp={session.profile_picture || "/userPlaceholder.jpg"}
            />
            <AccountInfo
              label={"Name"}
              value={session.user_name || "Name not available"}
            />
            <AccountInfo
              label={"Email"}
              value={session.user_email || "Email not available"}
            />
          </div>
        </div>
      </div>
    </LoadLocalStoragePfp>
  );
};

export default AccountPage;

const AccountInfo = ({ label, value }) => {
  return (
    <div>
      <label htmlFor="" className="mb-2 font-medium text-[#F5F3C2]">
        {label}
      </label>
      <div>{value}</div>
    </div>
  );
};
