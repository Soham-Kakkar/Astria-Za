"use client"
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import HomePage from "../page";
import "./WelcomePage.css"

export default function WelcomePage() {
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  if (timeLeft !== 0) return (
    <div className="timer-container">
      <div className="timer-circle">{timeLeft}</div>
    </div>
  )
  else {
    return (
      <>
        <Confetti
          recycle={false}
          style={{ position: 'fixed', zIndex: 3 }}
        />
        <HomePage />
      </>
    )
  }
}