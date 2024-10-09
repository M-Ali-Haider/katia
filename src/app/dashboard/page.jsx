import { logout } from "@/actions/actions";

const DashboardPage = () => {
  return (
    <div
      className="text-white min-h-screen flex flex-col gap-4 
        items-center justify-center"
    >
      <h1 className="text-2xl">Dashboard Page</h1>
      <p className="text-lg">Congrats You Successfully Logged In</p>
      <Logout />
    </div>
  );
};

export default DashboardPage;

export function Logout() {
  return (
    <form action={logout}>
      <button className="bg-[#F5F3C2] py-3 px-8 rounded-lg text-black">
        Logout
      </button>
    </form>
  );
}
