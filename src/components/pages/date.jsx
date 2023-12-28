import React, { useState, useEffect } from 'react';

const DateUpdater = () => {
  const [currentDate, setCurrentDate] = useState(formatDate(new Date()));

  useEffect(() => {
    // Update the date every second
    const intervalId = setInterval(() => {
      const newDate = formatDate(new Date());
      setCurrentDate(newDate);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means useEffect runs once on mount

  // Helper function to format the date as DD/MM/YYYY
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  return (
    <div>
      <p>{currentDate}</p>
    </div>
  );
};

export default DateUpdater;
