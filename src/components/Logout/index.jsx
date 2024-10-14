import { logout } from "@/actions/actions";

export function Logout({ className }) {
  return (
    <form action={logout}>
      <button
        className={`bg-[#F5F3C2] py-3 px-8 rounded-lg text-black ${className}`}
      >
        Logout
      </button>
    </form>
  );
}
