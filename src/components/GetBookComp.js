import React, { useState } from 'react';

function GetBookComp() {
  const [bookId, setBookId] = useState('');
  const [bookInfo, setBookInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);

  const fetchBookInfo = async () => {
    try {
      const response = await fetch(`http://localhost:8080/getId?id=${bookId}`);
      const data = await response.json();
      
      if (data) {
        setBookInfo(data);
        setErrorMessage('');
      } else {
        setBookInfo(null);
        setErrorMessage('No book found with the given ID.');
      }
    } catch (error) {
      setBookInfo(null);
      setErrorMessage('An error occurred while fetching the book information.');
    }
  };

  function divide(str) {
    return parseInt(str.split(':')[0]);
  }
  const generateTimeSlots = () => {
    const start = new Date(`2023-08-17T${bookInfo[0].start_time_}`);
    const end = new Date(`2023-08-17T${bookInfo[0].end_time_}`);
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

  function div1() {
    if (bookInfo && bookInfo[0]) {
      const h = divide(bookInfo[0].start_time_);
      const h2 = divide(bookInfo[0].end_time_);
     
      return h2 - h;
    }
    return 0; // Return a default value if bookInfo is not available
  }
  

  return (
    <div>
      <h2>Get Book Information</h2>
      <div>
        <label htmlFor="bookId">Book ID:</label>
        <input
          type="text"
          id="bookId"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
      </div>
      <button onClick={fetchBookInfo}>Get Book</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {bookInfo && bookInfo[0] && (
        <div>
          <p>Start Time Hours: {divide(bookInfo[0].start_time_)}</p>
          <p>End Time Hours: {divide(bookInfo[0].end_time_)}</p>
          <p>Time Difference: {div1()}</p>
          
        </div>
      )}
     
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
}

export default GetBookComp;
