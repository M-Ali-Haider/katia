"use client";

import { getPfp } from "@/actions/authenticatedActions";
import { loadFromLocalStorage, setPfp } from "@/store/pfp";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const LoadLocalStoragePfp = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFromLocalStorage());
  }, [dispatch]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["profile_picture"],
    queryFn: () => getPfp(),
  });
  useEffect(() => {
    if (!isLoading && data?.profile_picture) {
      dispatch(setPfp(data.profile_picture));
    }
  }, [data, isLoading, dispatch]);

  return children;
};

export default LoadLocalStoragePfp;
