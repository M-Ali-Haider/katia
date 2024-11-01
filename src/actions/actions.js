"use server";

import { getIronSession } from "iron-session";
import { defaultSession, sessionOptions } from "./lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

let email = "test@gmail.com";
let password = "123";
let otp = "1234";

export const getSession = async () => {
  const session = await getIronSession(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
};

export const checkEmail = async (prevData, formData) => {
  const session = await getSession();
  const formEmail = formData.get("email");
  if (formEmail !== email) {
    return { error: "We don't have an account with that email address." };
  }
  return { success: true };
};

export const checkPassword = async (prevData, formData) => {
  const session = await getSession();
  const formPassword = formData.get("password");
  if (formPassword !== password) {
    return { error: "That’s an incorrect password. Try again." };
  }
  return { success: true };
  // session.userId = "1";
  // session.isLoggedIn = true;
  // await session.save();
  // redirect("/home");
};

export const checkOTP = async (prevData, formData) => {
  const session = await getSession();
  const formOTP = formData.get("otp");
  if (formOTP !== otp) {
    return { error: "Invalid OTP. Please try again." };
  }
  session.userId = "1";
  session.isLoggedIn = true;
  await session.save();
  redirect("/home");
  return { success: true };
};

export const logout = async () => {
  const session = await getSession();
  console.log(session);
  session.destroy();
  redirect("/login");
};
