import React, { useState, useEffect, useRef } from 'react';
import './Stopwatch.css';

function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(function () {
    if (isRunning) {
      intervalRef.current = setInterval(function () {
        setTime(function (prevTime) {
          return prevTime + 1;
        });
      }, 1000);
    }

    return function () {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  function handleStart() {
    if (!isRunning) setIsRunning(true);
  }

  function handlePause() {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  }

  function handleReset() {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  }

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-time">{formatTime(time)}</h1>
      <div className="button-group">
        <button onClick={handleStart} className="stopwatch-button">Start</button>
        <button onClick={handlePause} className="stopwatch-button">Pause</button>
        <button onClick={handleReset} className="stopwatch-button">Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
