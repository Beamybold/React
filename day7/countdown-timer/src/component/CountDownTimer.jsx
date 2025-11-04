import { useState, useEffect } from 'react';
import './CountDown.css'

function CountdownTimer() {
  const [targetDate, setTargetDate] = useState(new Date("2025-11-21T00:00:00"));
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));
  const [customDate, setCustomDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTimeRemaining(targetDate);
      setTimeLeft(remaining);
    }, 1000);

    return () => clearInterval(interval); 
  }, [targetDate]);

  function getTimeRemaining(target) {
    const now = new Date();
    const total = target - now;

    if (total <= 0) {
      return {
        total: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true,
      };
    }

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
      expired: false,
    };
  }

  function handleDateChange(e) {
    setCustomDate(e.target.value);
  }

  function setNewTargetDate() {
    const newDate = new Date(customDate);
    if (!isNaN(newDate)) {
      setTargetDate(newDate);
    }
  }

   return (
    <div className="countdown-container">
      <h2 className="countdown-title"> Event Countdown</h2>
      {timeLeft.expired ? (
        <h3 className="countdown-expired">Event Started!</h3>
      ) : (
        <h3 className="countdown-time">
          {timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes} Minutes : {timeLeft.seconds} Seconds
        </h3>
      )}
      <p className="countdown-date">
        {targetDate.toLocaleDateString('en-NG', { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="countdown-input-group">
        <input type="datetime-local" value={customDate} onChange={handleDateChange} />
        <button onClick={setNewTargetDate}>Set Custom Date</button>
      </div>
    </div>
  );
}

export default CountdownTimer;
