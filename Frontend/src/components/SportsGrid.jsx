import { useEffect, useState } from "react";

function SportsGrid({ sports }) {

  const [sportsData, setSportsData] = useState([]);

  useEffect(() => {
    fetchSportsStats();
  }, []);

  const fetchSportsStats = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/dashboard/sports-stats"
      );

      const data = await response.json();

      // Merge backend data with existing images
      const updatedSports = sports.map((sport) => {

        const matchedSport = data.sports.find(
          (item) => item.name === sport.name
        );

        return {
          ...sport,
          bookings: matchedSport
            ? matchedSport.bookings
            : "0 bookings",
        };
      });

      setSportsData(updatedSports);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div className="sports-grid">

      {sportsData.map((sport, index) => (

        <div
          key={index}
          className="sport-card"
        >

          {/* IMAGE PART NOT TOUCHED */}
          <img
            src={sport.image}
            alt={sport.name}
            className="sport-image"
          />

          <div className="sport-info">
            <h3>{sport.name}</h3>
            <p>{sport.bookings}</p>
          </div>

        </div>
      ))}

    </div>
  );
}

export default SportsGrid;