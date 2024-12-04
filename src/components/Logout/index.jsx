"use client";
import { logout, logoutDestroySession } from "@/actions/actions";
import { removeFromLocalStorage } from "@/store/pfp";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import LoadingRing from "../LoadingRing";

export function Logout({ className }) {
  const dispatch = useDispatch();
  const [state, formAction] = useFormState(logout, undefined);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (state?.success) {
      dispatch(removeFromLocalStorage());
      logoutDestroySession();
    }
    if (state?.error) {
      toast.error(state.error);
      setLoading(false);
    }
  }, [state, dispatch]);
  return (
    <form action={formAction}>
      <button
        onClick={() => setLoading(true)}
        className={`bg-[#F5F3C2] active:scale-95 flex items-center justify-center transition duration-100 py-3 px-8 rounded-lg text-black ${className}`}
      >
        {isLoading ? (
          <LoadingRing
            width={"19.6px"}
            height={"19.6px"}
            colors={["#000000"]}
          />
        ) : (
          <>Logout</>
        )}
      </button>
    </form>
  );
}
