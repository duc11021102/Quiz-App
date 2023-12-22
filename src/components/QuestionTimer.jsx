import { useState, useEffect } from "react";
import "../styles/QuestionTimer/QuestionTimer.css";
export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    // sau 10 giay neu k chon dap an se gui dap an la null
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      className="progress"
      max={timeout}
      // className={`${classes[mode]}`}
      value={remainingTime}
    />
  );
}
