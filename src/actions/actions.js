"use server";

import { getIronSession } from "iron-session";
import { defaultSession, sessionOptions } from "./lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

let email = "something@gmail.com";
let password = "123";

export const getSession = async () => {
  const session = await getIronSession(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
};

export const checkUsername = async (formData) => {
  const session = await getSession();
  const formEmail = formData.get("email");
  if (formEmail !== email) {
    return { error: "We don't have an account with that email address." };
  }
};
