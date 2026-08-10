import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface StickyMobileCTAProps {
  onScrollToOffers: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onScrollToOffers }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 animate-slideUp">
      <div className="p-3.5 rounded-full bg-[#1C1917]/95 backdrop-blur-md border border-[#44403C] shadow-2xl flex items-center justify-between gap-3 text-white">
        <div className="pl-2">
          <p className="font-bold text-xs text-white">Kit Consultorio Teen</p>
          <p className="text-[10px] text-amber-300 font-medium">Desde US$5 • Acceso Inmediato</p>
        </div>

        <button
          onClick={onScrollToOffers}
          className="px-5 py-2.5 rounded-full bg-[#D25432] hover:bg-[#b84223] text-white font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center gap-1 cursor-pointer shrink-0"
        >
          <span>Ver Kit</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

