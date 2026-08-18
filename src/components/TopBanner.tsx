import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const TopBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 25, seconds: 5 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 2, minutes: 25, seconds: 5 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="w-full bg-[#D10A2A] text-white py-2 px-3 flex items-center justify-center gap-3 text-xs sm:text-[13px] font-extrabold tracking-wide uppercase shadow-sm">
      <div className="flex items-center gap-1.5">
        <span className="text-sm">🔥</span>
        <span>OFERTA VÁLIDA SOLO HOY</span>
      </div>
      <div className="flex items-center gap-1.5 bg-[#8E041A] px-2.5 py-0.5 rounded-md text-white font-mono text-xs sm:text-[13px] font-bold">
        <Clock className="w-3.5 h-3.5 text-white" />
        <span>{format(timeLeft.hours)}:{format(timeLeft.minutes)}:{format(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};
