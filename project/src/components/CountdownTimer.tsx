import React, { useState, useEffect } from 'react';
import { calculateTimeLeft } from '../utils/time';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-6xl font-bold mb-8 text-white tracking-widest hover:text-glow transition-all duration-300">
        VOLUME II
      </h2>
      <div className="flex items-center justify-center gap-4 text-4xl font-bold text-white">
        <div className="flex flex-col items-center">
          <span className="tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="text-sm uppercase tracking-wider text-gray-400">Hours</span>
        </div>
        <span className="text-gray-500">:</span>
        <div className="flex flex-col items-center">
          <span className="tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="text-sm uppercase tracking-wider text-gray-400">Minutes</span>
        </div>
        <span className="text-gray-500">:</span>
        <div className="flex flex-col items-center">
          <span className="tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="text-sm uppercase tracking-wider text-gray-400">Seconds</span>
        </div>
      </div>
    </div>
  );
}