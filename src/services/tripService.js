import axios from "axios";

const API_URL = "http://localhost:3000/api/trips";


// CREATE TRIP

export async function createTrip(data) {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.post(`${process.env.API_URL}/trips`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (err) {
    console.error("Error creating trip:", err.response?.data || err);
    return null;
  }
}


// GET MY TRIPS

export async function getMyTrips() {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(`${process.env.API_URL}/trips/my`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (err) {
    console.error("Error fetching trips:", err.response?.data || err);
    return [];
  }
}


// DELETE TRIP

export async function deleteTrip(id) {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.delete(`${process.env.API_URL}/trips/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (err) {
    console.error("Error deleting trip:", err.response?.data || err);
    return null;
  }
}
export async function updateTrip(id, data) {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.put(`${process.env.API_URL}/trips/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (err) {
    console.error("Error updating trip:", err.response?.data || err);
    return null;
  }
}


export async function joinTrip(id) {
  const token = localStorage.getItem("token");
  return axios.post(`${process.env.API_URL}/trips/${id}/join`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export async function leaveTrip(id) {
  const token = localStorage.getItem("token");
  return axios.post(`${process.env.process.env.API_URL}/trips/${id}/leave`, {}, {
    headers: { Authorization: `Bearer ${token}` }
  });
}