import {
  FaWater,
  FaCalendarAlt,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">🌊 WaveMate</h2>

      <ul className="menu">
        <li className="active">
          <FaWater />
          Dashboard
        </li>

        <li>
          <FaCalendarAlt />
          Bookings
        </li>

        <li>
          <FaWater />
          Water Sports
        </li>

        <li>
          <FaChartBar />
          Analytics
        </li>

        <li>
          <FaCog />
          Settings
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;