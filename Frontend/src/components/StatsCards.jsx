import { useEffect, useState } from "react";

function StatsCards() {

  const [bookingsToday, setBookingsToday] = useState(0);
  const [todayRevenue, setTodayRevenue] = useState(0);
  const [reviewsToday, setReviewsToday] = useState(0);
  const [pendingBookings, setPendingBookings] = useState(0);

  useEffect(() => {
    fetchBookings();
    fetchRevenue();
    fetchReviews();
    fetchPendingBookings();
  }, []);

  // Fetch bookings
  const fetchBookings = async () => {
    try {

      const response = await fetch(
        "http://localhost:8080/api/dashboard/today-bookings"
      );

      const data = await response.json();

      setBookingsToday(data.bookingsToday);

    } catch (error) {
      console.log(error);
    }
  };

  // Fetch revenue
  const fetchRevenue = async () => {
    try {

      const response = await fetch(
        "http://localhost:8080/api/dashboard/today-revenue"
      );

      const data = await response.json();

      setTodayRevenue(data.totalRevenue);

    } catch (error) {
      console.log(error);
    }
  };

  // Fetch reviews
  const fetchReviews = async () => {
    try {

      const response = await fetch(
        "http://localhost:8080/api/dashboard/today-reviews"
      );

      const data = await response.json();

      setReviewsToday(data.reviewsToday);

    } catch (error) {
      console.log(error);
    }
  };

  // pending

  const fetchPendingBookings = async () => {

  try {

    const response = await fetch(
      "http://localhost:8080/api/dashboard/pending-bookings"
    );

    const data = await response.json();

    setPendingBookings(data.pendingBookings);

  } catch (error) {

    console.log(error);
  }
};
  return (
    <div className="top-cards">

      <div className="dashboard-card bookings">
        <h3>Bookings Today</h3>
        <h1>{bookingsToday}</h1>
        <p>Live booking count</p>
      </div>

      <div className="dashboard-card pending">
        <h3>Pending Confirmations</h3>
        <h1>{pendingBookings}</h1>
        <p>Pending booking requests</p>
      </div>

      <div className="dashboard-card revenue">
        <h3>Revenue Today</h3>
        <h1>₹{todayRevenue}</h1>
        <p>Today's revenue</p>
      </div>

      <div className="dashboard-card reviews">
        <h3>Reviews Received</h3>
        <h1>{reviewsToday}</h1>
        <p>Today's reviews</p>
      </div>

    </div>
  );
}

export default StatsCards;