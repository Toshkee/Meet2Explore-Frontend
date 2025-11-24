import axios from "axios";

const TRIPS_API = "https://meet2exploree-b38798365d15.herokuapp.com/api/trips";

export async function createTrip(data) {
  const token = localStorage.getItem("token");

  const res = await axios.post(TRIPS_API, data, {
    headers: { Authorization: `Bearer ${token}` }
  });

  return res.data;
}

export async function getMyTrips() {
  const token = localStorage.getItem("token");

  const res = await axios.get(`${TRIPS_API}/my`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  return res.data;
}

export async function deleteTrip(id) {
  const token = localStorage.getItem("token");

  const res = await axios.delete(`${TRIPS_API}/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  return res.data;
}

export async function updateTrip(id, data) {
  const token = localStorage.getItem("token");

  const res = await axios.put(`${TRIPS_API}/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  });

  return res.data;
}