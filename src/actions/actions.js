"use server";

import { getIronSession } from "iron-session";
import { defaultSession, sessionOptions } from "./lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

let email = "test@gmail.com";
let password = "123";

export const getSession = async () => {
  const session = await getIronSession(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
};

export const checkUsername = async (prevData, formData) => {
  const session = await getSession();
  const formEmail = formData.get("email");
  if (formEmail !== email) {
    return { error: "We don't have an account with that email address." };
  }
  session.userId = "1";
  session.email = formEmail;
  session.isLoggedIn = true;

  await session.save();
  redirect("/dashboard");
};

// export const checkPassword = async (formData) => {
//   const session = await getSession();
//   const formEmail = formData.get("email");
//   if (formEmail !== email) {
//     return { error: "That’s an incorrect password. Try again." };
//   }
//   //I want to save username in the session as well idk how i can do that
//   session.userId = "1";
//   //session.username = formUsername;
//   session.isLoggedIn = true;
//   await session.save();
//   redirect("/dashboard");
// };

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/login");
};
