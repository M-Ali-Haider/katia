import Heading from "@/components/Settings/heading";

const AccountPage = () => {
  return (
    <div>
      <Heading text={"Account Details"} className={"mb-4"} />
      <div className="p-8 border rounded-xl">
        <h3 className="text-2xl font-medium">Account</h3>
      </div>
    </div>
  );
};

export default AccountPage;
