"use server";

import { getSession } from "./actions";
import cookie from "cookie";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const changePassword = async (prevData, formData) => {
  const current_password = formData.get("currentPassword");
  const new_password = formData.get("newPassword");

  try {
    const session = await getSession();

    if (!session.csrfToken) {
      return {
        error: "Authentication error: Missing CSRF token",
      };
    }

    const res = await fetch(`${backendUrl}/api/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": session.csrfToken,
        Cookie: `csrftoken=${session.csrfToken}; sessionid=${session.sessionId}`,
      },
      credentials: "include",
      body: JSON.stringify({ current_password, new_password }),
    });

    const data = await res.json();

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
      await session.save();
    }

    if (res.ok) {
      return { success: data.message || "Password changed successfully." };
    }
    return {
      error: data.error || "Password Change Failed. Please try again.",
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      error: "An unexpected error occured. Please try again later.",
    };
  }
};

export const uploadProfilePicture = async (prevState, formData) => {
  try {
    const file = formData.get("profile_picture");
    if (!file) {
      return { error: "No file selected" };
    }
    const session = await getSession();
    const res = await fetch(`${backendUrl}/api/upload-picture`, {
      method: "POST",
      headers: {
        "X-CSRFToken": session.csrfToken,
        Cookie: `csrftoken=${session.csrfToken}; sessionid=${session.sessionId}`,
      },
      credentials: "include",
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      return {
        success: data.message,
        profile_picture: data.profile_picture,
      };
    }
    return {
      error: data.message || "Failed to upload profile picture",
    };
  } catch (error) {
    console.error("Profile picture upload error:", error);
    return {
      error: "An unexpected error has occured. Please try again later.",
    };
  }
};

export const displayConversation = async () => {
  try {
    const session = await getSession();
    const res = await fetch(
      `${backendUrl}/api/display-convo?user_id=${session.userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": session.csrfToken,
          Cookie: `csrftoken=${session.csrfToken}; sessionid=${session.sessionId}`,
        },
        credentials: "include",
      }
    );
    if (!res.ok) {
      throw new Error(`Failed to display conversation: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error displaying conversation: ", error);
    throw error;
  }
};

export const createMessage = async (prompt) => {
  try {
    const session = await getSession();
    const res = await fetch(`${backendUrl}/api/create-message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": session.csrfToken,
        Cookie: `csrftoken=${session.csrfToken}; sessionid=${session.sessionId}`,
      },
      credentials: "include",
      body: JSON.stringify({
        user_id: session.userId,
        message: prompt,
      }),
    });
    if (!res.ok) {
      throw new Error(`Failed to create message: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error creating message: ", error);
    throw error;
  }
};

export const deleteConversation = async () => {
  try {
    const session = await getSession();
    const res = await fetch(
      `${backendUrl}/api/delete-conversation?user_id=${session.userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": session.csrfToken,
          Cookie: `csrftoken=${session.csrfToken}; sessionid=${session.sessionId}`,
        },
        credentials: "include",
      }
    );
    const data = await res.json();
    if (res.ok) {
      return { success: data.message || "Conversation deleted successfully." };
    }
    return { error: data.error || "Error in deleting conversation." };
  } catch (error) {
    console.error("Error deleting conversation: ", error);
    return { error: "An unexpected error occured. Please try again later." };
  }
};

export const getPfp = async () => {
  try {
    const session = await getSession();
    const res = await fetch(`${backendUrl}/api/get-profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": session.csrfToken,
        Cookie: `csrftoken=${session.csrfToken}; sessionid=${session.sessionId}`,
      },
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error(`Failed to get Profile Picture: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error getting pfp ", error);
    throw error;
  }
};
