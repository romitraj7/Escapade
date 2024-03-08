import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({ targetDate }) => {
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

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="timer-container">
      <div className="timer">
        <div className="timer-item">
          <span>{addLeadingZero(timeLeft.days)}</span>
          <span>Days</span>
        </div>
        <div className="timer-item">
          <span>{addLeadingZero(timeLeft.hours)}</span>
          <span>Hours</span>
        </div>
        <div className="timer-item">
          <span>{addLeadingZero(timeLeft.minutes)}</span>
          <span>Minutes</span>
        </div>
        <div className="timer-item">
          <span>{addLeadingZero(timeLeft.seconds)}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
