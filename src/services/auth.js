import axios from "axios";


export async function registerUser(username, password) {
  try {
    const res = await axios.post(`${process.env.API_URL}/auth/sign-up`, {
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
    const res = await axios.post(`${process.env.API_URL}/auth/sign-in`, {
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