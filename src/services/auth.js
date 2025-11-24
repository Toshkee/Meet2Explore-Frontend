import axios from "axios";

const API_URL = "https://meet2exploree-b38798365d15.herokuapp.com/api/auth";

export async function registerUser(username, password) {
  try {
    const res = await axios.post(`${API_URL}/sign-up`, {
      username,
      password,
    });

    return {
      success: true,
      token: res.data.token,
      userId: res.data.userId,
      username: res.data.username,
    };
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "Registration failed",
    };
  }
}

export async function loginUser(username, password) {
  try {
    const res = await axios.post(`${API_URL}/sign-in`, {
      username,
      password,
    });

    return {
      success: true,
      token: res.data.token,
      userId: res.data.userId,
      username: res.data.username,
    };
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "Login failed",
    };
  }
}