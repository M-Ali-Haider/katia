import { getSession } from "@/actions/actions";
import { useEffect, useState } from "react";

export const useSession = () => {
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const sessionData = await getSession();
        setSession(sessionData);
      } catch (error) {
        console.error("Failed to fetch session", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSession();
  }, []);

  return { session, isLoading };
};
