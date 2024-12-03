"use client";

import { loadFromLocalStorage } from "@/store/pfp";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const LoadLocalStoragePfp = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFromLocalStorage());
  }, [dispatch]);
  return children;
};

export default LoadLocalStoragePfp;
