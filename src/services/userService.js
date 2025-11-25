
import axios from "axios";



export async function getProfile() {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token");

  const res = await axios.get(`${process.env.API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}

export async function updateProfile(data) {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token");

  const res = await axios.put(`${process.env.API_URL}/users/me`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}
