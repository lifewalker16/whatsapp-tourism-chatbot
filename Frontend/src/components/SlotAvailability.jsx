function SlotAvailability() {
  const slots = [
    ["Jet Ski Ride", "40%"],
    ["Parasailing", "0%"],
    ["Banana Boat", "0%"],
    ["Scuba Diving", "0%"],
  ];

  return (
    <div className="slots-box">
      <h2>Live Slot Availability</h2>

      {slots.map((slot, index) => (
        <div className="slot-item" key={index}>

          <div className="slot-header">
            <span>{slot[0]}</span>
            <span>{slot[1]}</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: slot[1] }}
            />
          </div>

        </div>
      ))}
    </div>
  );
}

export default SlotAvailability;