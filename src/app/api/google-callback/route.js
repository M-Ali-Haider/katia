import { getSession } from "@/actions/actions";
import { NextResponse } from "next/server";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID,
        client_secret: process.env.AUTH_GOOGLE_SECRET,
        code: code,
        grant_type: "authorization_code",
        redirect_uri: process.env.NEXT_PUBLIC_BASE_URL + "/api/google-callback",
      }),
    });

    const tokenData = await tokenResponse.json();

    const userResponse = await fetch(
      "https://www.googleapis.com/oauth2/v1/userinfo",
      {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
      }
    );

    const userData = await userResponse.json();

    const session = await getSession();
    const backendResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/google-login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": session.csrfToken,
        },
        body: JSON.stringify({ token: tokenData.access_token }),
      }
    );

    const backendData = await backendResponse.json();
    if (backendData.success) {
      session.user_email = userData.email;
      session.user_name = userData.name;
      session.profile_picture = userData.picture;
      session.isLoggedIn = true;

      console.log(session);

      await session.save();
      return NextResponse.redirect(new URL("/home", req.url));
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } catch (error) {
    console.error("Google Auth Error:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
