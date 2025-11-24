const PROFILE_API = "https://meet2exploree-b38798365d15.herokuapp.com/api/auth";

export async function getProfile() {
  const token = localStorage.getItem("token");
  return axios.get(`${PROFILE_API}/me`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export async function updateProfile(data) {
  const token = localStorage.getItem("token");
  return axios.put(`${PROFILE_API}/me`, data, {
    headers: { Authorization: `Bearer ${token}` }
  });
}
