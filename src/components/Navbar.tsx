import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';

interface NavbarProps {
  onOpenConfig: () => void;
  onScrollToOffers?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConfig }) => {
  // Configurable initial countdown duration (hours, minutes, seconds)
  // Set to 2 hours 15 mins by default
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 2,
    minutes: 15,
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
        // When timer reaches 0, stay at 00:00:00 (no fake misleading restart)
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="bg-[#1C1917] text-white text-xs sm:text-sm py-2 px-4 sticky top-0 z-50 font-bold tracking-wide shadow-xs flex items-center justify-between border-b border-[#332F2C]">
      <div className="w-full text-center flex items-center justify-center gap-2 flex-wrap">
        <span className="text-[#D25432] font-black">🔥 OFERTA ESPECIAL DE LANZAMIENTO</span>
        <span className="hidden sm:inline text-stone-400">•</span>
        <div className="inline-flex items-center gap-1 text-stone-300 font-medium">
          <span>Tiempo restante:</span>
          <span className="font-mono bg-[#D25432]/20 text-[#D25432] px-2 py-0.5 rounded border border-[#D25432]/30 text-xs font-bold tracking-widest ml-1">
            {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
          </span>
        </div>
      </div>

      <button
        onClick={onOpenConfig}
        title="Configurar enlaces de Hotmart"
        className="p-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors shrink-0 ml-2"
      >
        <Settings className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};


