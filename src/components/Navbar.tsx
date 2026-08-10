import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenConfig?: () => void;
  onScrollToOffers?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  // Configurable initial countdown duration (10 hours remaining as requested)
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 10,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="bg-[#C84B31] text-white text-xs sm:text-sm py-2.5 px-4 sticky top-0 z-50 font-bold tracking-wide shadow-xs flex items-center justify-center">
      <div className="w-full text-center flex items-center justify-center gap-2">
        <span className="font-extrabold text-white uppercase">ESTA PÁGINA SALDRÁ DEL AIRE EN:</span>
        <span className="font-mono bg-black/20 px-2 py-0.5 rounded text-white font-black tracking-widest">
          {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
        </span>
      </div>
    </div>
  );
};


