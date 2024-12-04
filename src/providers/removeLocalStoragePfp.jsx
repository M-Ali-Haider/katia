"use client";

import { removeFromLocalStorage } from "@/store/pfp";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const RemoveLocalStoragePfp = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeFromLocalStorage());
  }, [dispatch]);
  return children;
};

export default RemoveLocalStoragePfp;
