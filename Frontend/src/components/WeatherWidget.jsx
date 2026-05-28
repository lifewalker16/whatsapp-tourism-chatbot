function WeatherWidget() {
  return (
    <div className="weather-box">

      <div className="weather-icon">
        ☀️
      </div>

      <h1>31°C</h1>
      <h3>Sunny</h3>

      <p>Calangute, Goa</p>

      <div className="weather-details">
        <span>💧 Humidity: 72%</span>
        <span>🌬 Wind: 15 km/h</span>
        <span>🌅 Sunset: 6:45 PM</span>
      </div>

    </div>
  );
}

export default WeatherWidget;