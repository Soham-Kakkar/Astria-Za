"use client";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

export { Confetti };

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  const [timeLeft, setTimeLeft] = useState(5);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) {
      setInterval(()=>{}, 1000);
      const intervalId = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timeLeft, started]);

  const handleStart = () => {
    setStarted(true);
  }

  if (timeLeft !== 0 && started) return (
    <div className="timer-container">
      <div className="timer-circle">{timeLeft}</div>
    </div>
  )
  else if (!started) {
    return (
      <div className="timer-container">
        <div className="timer-circle">
          <button className="start-btn" onClick={handleStart}>
          <div id="clip">
          <div id="leftTop" className="corner" />
          <div id="rightBottom" className="corner" />
          <div id="rightTop" className="corner" />
          <div id="leftBottom" className="corner" />
        </div>
        <span id="rightArrow" className="arrow" />
        <span id="leftArrow" className="arrow" />
          Reveal
        </button>
        </div>
      </div>
    )
  }
  else return (
    <>
    {children}
    </>
    )
}