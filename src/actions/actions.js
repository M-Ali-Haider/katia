"use server";
import cookie from "cookie";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { defaultSession, oauth_google, sessionOptions } from "./lib";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getSession = async () => {
  const session = await getIronSession(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
};

export async function initiateGoogleAuth() {
  const query = {
    client_id: oauth_google.client_id,
    redirect_uri: oauth_google.redirect_uri,
    response_type: "code",
    scope: oauth_google.scopes,
    access_type: "offline",
    prompt: "consent",
  };

  const url = new URL(oauth_google.endpoint);
  url.search = new URLSearchParams(query).toString();
  redirect(url.toString());
}

export const signup = async (prevData, formData) => {
  const full_name = formData.get("fullName");
  const email = formData.get("email");
  const password = formData.get("password");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address" };
  }

  try {
    const session = await getSession();
    const res = await fetch(`${backendUrl}/api/register-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name,
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.ok && data.success) {
      throw redirect(
        `/verify-otp?email=${encodeURIComponent(email)}&flow=register`
      );
    }
    return {
      error: data.message || "Registration failed. Please try again.",
    };
  } catch (error) {
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error;
    }
    console.error("Signup error:", error);
    return {
      error: "An unexpected error occured. Please try again later.",
    };
  }
};

export const checkOTP = async (prevData, formData) => {
  const session = await getSession();
  const otp = formData.get("otp");
  const flow = formData.get("flow");

  try {
    const res = await fetch(`${backendUrl}/api/verify-otp?otp=${otp}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok && data.success) {
      const cookies = res.headers.get("set-cookie");
      if (cookies) {
        const cookiesArray = cookies.split(",").map(cookie.parse);
        cookiesArray.forEach((cookieObj) => {
          if (cookieObj.csrftoken) {
            session.csrfToken = cookieObj.csrftoken;
          }
          if (cookieObj.sessionid) {
            session.sessionId = cookieObj.sessionid;
          }
        });
      }
      session.userId = data.user_id;
      if (flow === "forgot-password") {
        await session.save();
        throw redirect(`/reset-password`);
      }
      return {
        success: true,
        message: "OTP Verification Successful. Redirecting...",
        user_id: data.user_id,
        user_name: data.user_name,
        user_email: data.user_email,
        profile_picture: data.profile_picture,
        auth_type: data.auth_type,
        csrfToken: session.csrfToken,
        sessionId: session.sessionId,
      };
    }
    return {
      error: "Incorrect OTP",
    };
  } catch (error) {
    return {
      error: "An unexpected error occured. Please try again later.",
    };
  }
};

export const login = async (prevState, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const session = await getSession();
    const res = await fetch(`${backendUrl}/api/credentials-login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok && data.success) {
      throw redirect(
        `verify-otp?email=${encodeURIComponent(email)}&flow=login`
      );
    }
    return {
      error: data.message || "Login failed. Please try again.",
    };
  } catch (error) {
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error;
    }
    console.error("Login error:", error);
    return {
      error: "An unexpected error occured. Please try again later.",
    };
  }
};

export const logout = async () => {
  try {
    const session = await getSession();
    const res = await fetch(`${backendUrl}/api/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = res.json();
    if (res.ok) {
      return { success: "Logging Out..." };
      // session.destroy();
      // throw redirect(`/login`);
    }
    return {
      error: data.message || "Logout Failed. Please try again.",
    };
  } catch (error) {
    return {
      error: "An unexpected error occured. Please try again later.",
    };
  }
};

export const logoutDestroySession = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/login");
};

export const forgotPassword = async (prevData, formData) => {
  const email = formData.get("email");
  try {
    const res = await fetch(`${backendUrl}/api/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (res.ok && data.success) {
      throw redirect(
        `/verify-otp?email=${encodeURIComponent(email)}&flow=forgot-password`
      );
    }
    return {
      error: data.message || "Forgot Password Failed. Please try again.",
    };
  } catch (error) {
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error;
    }
    console.error("Forgot Password Error:", error);
    return {
      error: "An unexpected error occured. Please try again later.",
    };
  }
};

export const resetPassword = async (prevData, formData) => {
  const new_password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (new_password !== confirmPassword) {
    return { error: "Passwords do not match." };
  }

  try {
    const session = await getSession();
    const res = await fetch(`${backendUrl}/api/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: session.userId, new_password }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      // session.destroy();
      // throw redirect(`/login`);
      return { success: data.message || "Reset Password Successful" };
    }
    return {
      error: data.message || "Reset Password Failed. Please try again.",
    };
  } catch (error) {
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error;
    }
    console.error("Reset Password Error:", error);
    return {
      error: "An unexpected error has occured. Please try again later.",
    };
  }
};

export const resendOTP = async (email) => {
  try {
    const res = await fetch(`${backendUrl}/api/resend-otp?email=${email}`, {
      method: "POST",
    });
    const data = await res.json();
    if (res.ok && data.success) {
      return { success: "OTP Resend Successful." };
    }
    return { error: data.message || "OTP Resend Failed." };
  } catch (error) {
    return { error: "An unexpected error occured. Please try again later." };
  }
};

export const destroySession = async () => {
  const session = await getSession();
  session.destroy();
  return;
};

export const displayPfp = async () => {
  const session = await getSession();
  return session?.profile_picture || "/userPlaceholder.jpg";
};

export const saveCheckOTPSession = async (
  user_id,
  user_name,
  user_email,
  auth_type,
  csrfToken,
  sessionId
) => {
  const session = await getSession();
  session.userId = user_id;
  session.user_name = user_name;
  session.user_email = user_email;
  session.auth_type = auth_type;
  session.csrfToken = csrfToken;
  session.sessionId = sessionId;
  session.isLoggedIn = true;
  await session.save();
  redirect("/home");
};
