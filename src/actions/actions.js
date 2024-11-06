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

export const signup = async ({ firstName, lastName, email, password }) => {
  try {
    console.log({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    });
    return { success: true };
  } catch (error) {
    console.error("Error during signup:", error);
    return { error: "An error occurred during signup." };
  }
};
// export const signup = async ({ firstName, lastName, email, password }) => {
//   try {
//     const response = await fetch(process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         first_name: firstName,
//         last_name: lastName,
//         email: email,
//         password: password,
//       }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       return { error: errorData.message || "Signup failed" };
//     }

//     const data = await response.json();
//     return { success: true, data };
//   } catch (error) {
//     console.error("Error during signup:", error);
//     return { error: "An error occurred during signup." };
//   }
// };
