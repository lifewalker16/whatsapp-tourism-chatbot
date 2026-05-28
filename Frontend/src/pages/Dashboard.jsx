import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import RevenueChart from "../components/RevenueChart";
import RecentBookings from "../components/RecentBookings";
import SlotAvailability from "../components/SlotAvailability";
import SportsGrid from "../components/SportsGrid";
import Highlights from "../components/Highlights";
import WeatherWidget from "../components/WeatherWidget";
import Footer from "../components/Footer";

import jetski from "../assets/jetski2.jpg";
import parasailing from "../assets/parasailing2.jpg";
import scuba from "../assets/scuba2.jpg";
import banana from "../assets/banana.jpg";

function Dashboard() {
  const sports = [
    {
      name: "Jet Ski",
      bookings: "145 Bookings",
      image: jetski,
    },
    {
      name: "Parasailing",
      bookings: "98 Bookings",
      image: parasailing,
    },
    {
      name: "Scuba Diving",
      bookings: "72 Bookings",
      image: scuba,
    },
    {
      name: "Banana Ride",
      bookings: "110 Bookings",
      image: banana,
    },
  ];

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <Header />

        <StatsCards />

        <div className="middle-section">
          <RevenueChart />
          <RecentBookings />
          <SlotAvailability />
        </div>

        <SportsGrid sports={sports} />

        <div className="bottom-section">
          <Highlights />
          <WeatherWidget />
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default Dashboard;