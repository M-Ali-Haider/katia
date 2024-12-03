"use client";
import { logout, logoutDestroySession } from "@/actions/actions";
import { removeFromLocalStorage } from "@/store/pfp";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export function Logout({ className }) {
  const dispatch = useDispatch();
  const [state, formAction] = useFormState(logout, undefined);
  useEffect(() => {
    if (state?.success) {
      toast.success(state.success);
      dispatch(removeFromLocalStorage());
      logoutDestroySession();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state, dispatch]);
  return (
    <form action={formAction}>
      <button
        className={`bg-[#F5F3C2] active:scale-95 transition duration-100 py-3 px-8 rounded-lg text-black ${className}`}
      >
        Logout
      </button>
    </form>
  );
}
