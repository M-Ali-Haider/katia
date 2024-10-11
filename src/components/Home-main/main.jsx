import { logout } from "@/actions/actions";
import BurgerMenu from "./burgerMenu";

const HomeMain = () => {
  return (
    <div
      className="flex-1 bg-[#191B31] px-5 flex justify-center 
      relative duration-500 ease-custom-ease transition-all h-screen max-h-screen"
    >
      <BurgerMenu />
      <div className="max-w-[768px] w-full flex items-center justify-center sm:border">
        <Logout />
      </div>
    </div>
  );
};

export default HomeMain;

export function Logout() {
  return (
    <form action={logout}>
      <button className="bg-[#F5F3C2] py-3 px-8 rounded-lg text-black">
        Logout
      </button>
    </form>
  );
}
