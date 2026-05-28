import { useEffect, useState } from "react";

function RecentBookings() {

  const [recentBookings, setRecentBookings] = useState([]);

  useEffect(() => {
    fetchRecentBookings();
  }, []);

  const fetchRecentBookings = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/dashboard/recent-bookings"
      );

      const data = await response.json();

      setRecentBookings(data.recentBookings);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div className="recent-bookings">

      <h2>Recent Bookings</h2>

      {recentBookings.map((booking) => (

        <div
          className="booking-item"
          key={booking._id}
        >

          <span>
            {booking.customerName} - {booking.activity}
          </span>

          <span
            className={
              booking.status === "confirmed"
                ? "confirmed"
                : "pending-status"
            }
          >
            {booking.status}
          </span>

        </div>
      ))}

    </div>
  );
}

export default RecentBookings;