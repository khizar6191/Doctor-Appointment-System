import React, { useState } from 'react';

const Apppp = () => {
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:00');
  const [timeSlots, setTimeSlots] = useState([]);

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const generateTimeSlots = () => {
    const start = new Date(`2023-08-17T${startTime}`);
    const end = new Date(`2023-08-17T${endTime}`);
    const slotDuration = 30 * 60 * 1000; // 30 minutes in milliseconds

    const slots = [];
    let currentTime = start;

    while (currentTime < end) {
      const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      slots.push({ value: formattedTime, label: formattedTime });
      currentTime = new Date(currentTime.getTime() + slotDuration);
    }

    setTimeSlots(slots);
  };

  return (
    <div>
      <h1>Time Slot Selector</h1>
      <div>
        <label htmlFor="start-time">Start Time:</label>
        <input type="time" id="start-time" value={startTime} onChange={handleStartTimeChange} />
      </div>
      <div>
        <label htmlFor="end-time">End Time:</label>
        <input type="time" id="end-time" value={endTime} onChange={handleEndTimeChange} />
      </div>
      <button onClick={generateTimeSlots}>Generate Time Slots</button>
      <div>
        <label htmlFor="time-slot">Select a Time Slot:</label>
        <select id="time-slot">
          {timeSlots.map((slot) => (
            <option key={slot.value} value={slot.value}>
              {slot.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Apppp;