import { useEffect, useState } from "react";
import "./MyTrips.css";

const MyTrips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function fetchTrips() {
      const data = await getTrips();
      setTrips(data);
    }
    fetchTrips();
  }, []);

  return (
    <div className="mytrips-wrapper">
      <h1 className="mytrips-title">My Trips</h1>

      <div className="mytrips-grid">
        {trips.map((trip) => (
          <TripCard key={trip._id} trip={trip} />
        ))}
      </div>
    </div>

    
  );
};

export default MyTrips