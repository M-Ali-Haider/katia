export const sessionOptions = {
  password: process.env.SECRET_KEY,
  cookieName: "test-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};

export const defaultSession = {
  isLoggedIn: false,
};

export const oauth_google = {
  client_id: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID || "",
  client_secret: process.env.AUTH_GOOGLE_SECRET || "",
  endpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  redirect_uri: process.env.NEXT_PUBLIC_BASE_URL + "/api/google-callback",
  scopes: [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
  ].join(" "),
};
