import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown-timer">
      <div className="time-unit">
        <span className="value">{timeLeft.days}</span>
        <span className="label">Days</span>
      </div>
      <div className="time-unit">
        <span className="value">{timeLeft.hours}</span>
        <span className="label">Hours</span>
      </div>
      <div className="time-unit">
        <span className="value">{timeLeft.minutes}</span>
        <span className="label">Minutes</span>
      </div>
      <div className="time-unit">
        <span className="value">{timeLeft.seconds}</span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
