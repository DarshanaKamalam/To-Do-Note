import React, { useState, useEffect } from 'react';

const TimeUpdater = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means useEffect runs once on mount

  return (
    <div>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default TimeUpdater;
