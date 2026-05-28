function Header() {
  return (
    <div className="dashboard-header">
      <div>
        <h1>OPERATOR DASHBOARD</h1>
        <p>Welcome back! Here's what's happening today.</p>
      </div>

      <div className="top-right">
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
        />

        <button className="notification-btn">
          🔔
        </button>

        <div className="profile-box">
          <p>Dashboard Admin</p>
        </div>
      </div>
    </div>
  );
}

export default Header;