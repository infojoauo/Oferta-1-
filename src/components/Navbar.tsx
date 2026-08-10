import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';

interface NavbarProps {
  onOpenConfig: () => void;
  onScrollToOffers: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConfig }) => {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 11,
    minutes: 24,
    seconds: 29
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
        return { hours: 11, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="bg-[#C84B31] text-white text-xs sm:text-sm py-2 px-4 sticky top-0 z-50 font-bold tracking-wide shadow-xs flex items-center justify-between">
      <div className="w-full text-center flex items-center justify-center gap-2">
        <span>Esta página saldrá del aire en:</span>
        <span className="font-mono bg-black/20 px-2 py-0.5 rounded text-white tracking-widest">
          {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
        </span>
      </div>

      <button
        onClick={onOpenConfig}
        title="Configurar enlaces de Hotmart"
        className="p-1 rounded bg-black/20 hover:bg-black/40 text-white/80 hover:text-white transition-colors shrink-0"
      >
        <Settings className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

