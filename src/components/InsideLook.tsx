import React, { useEffect, useState, useRef } from 'react';
import { IMAGE_ASSETS } from '../config';

interface InsideLookProps {
  onScrollToOffers: () => void;
}

export const InsideLook: React.FC<InsideLookProps> = ({ onScrollToOffers }) => {
  // 6 worksheet pages using the 6 uploaded real worksheet images
  const worksheets = [
    {
      id: 1,
      title: 'Diario de Emociones Visual',
      imageSrc: (IMAGE_ASSETS as any).INSIDE_LOOK_1
    },
    {
      id: 2,
      title: 'Mi Mapa Corporal de la Ansiedad',
      imageSrc: (IMAGE_ASSETS as any).INSIDE_LOOK_2
    },
    {
      id: 3,
      title: 'Juego de las Emociones y Personaje',
      imageSrc: (IMAGE_ASSETS as any).INSIDE_LOOK_3
    },
    {
      id: 4,
      title: 'Expresiones Faciales y Reconocimiento',
      imageSrc: (IMAGE_ASSETS as any).INSIDE_LOOK_4
    },
    {
      id: 5,
      title: 'Termómetro de la Energía',
      imageSrc: (IMAGE_ASSETS as any).INSIDE_LOOK_5
    },
    {
      id: 6,
      title: 'Árbol de las Consecuencias',
      imageSrc: (IMAGE_ASSETS as any).INSIDE_LOOK_6
    }
  ];

  // Quadruple items to allow a totally smooth, continuous infinite scrolling loop
  const infiniteList = [...worksheets, ...worksheets, ...worksheets, ...worksheets];
  const [scrollX, setScrollX] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  // Smooth uninterrupted continuous infinite scrolling (never stops on hover or touch)
  useEffect(() => {
    let lastTimestamp = performance.now();

    const step = (now: number) => {
      const delta = now - lastTimestamp;
      lastTimestamp = now;

      setScrollX((prev) => {
        // Speed: continuous constant speed ~40px per second
        const next = prev + (delta * 0.04);
        // Set width based on 6 cards (width ~200px + 16px gap = 216px * 6 = 1296px)
        const setWidth = worksheets.length * 216;
        return next >= setWidth ? next - setWidth : next;
      });

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [worksheets.length]);

  return (
    <section 
      className="bg-[#0B1325] text-white py-14 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800"
    >
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Title matching exact reference screenshot */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-2.5 text-white">
          Mira el kit por dentro
        </h2>
        
        {/* Subtitle matching exact copy and hierarchy */}
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-medium leading-relaxed">
          Más de 130 recursos organizados, listos para imprimir y aplicar. Cada uno desarrollado para situaciones reales de consultorio.
        </p>

        {/* Infinite Carousel Container */}
        <div className="relative w-full overflow-hidden mb-9 py-2">
          
          {/* Left & Right gradient fade masks for smooth infinite blend */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-[#0B1325] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-[#0B1325] to-transparent z-10 pointer-events-none" />

          {/* Scrolling continuous track */}
          <div 
            className="flex gap-4 select-none will-change-transform"
            style={{
              transform: `translateX(-${scrollX}px)`
            }}
          >
            {infiniteList.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[170px] sm:w-[195px] md:w-[210px] shrink-0 bg-white rounded-2xl p-2 sm:p-2.5 shadow-2xl border border-slate-700/60 flex items-center justify-center pointer-events-none"
                style={{
                  aspectRatio: '1 / 1.38' // Standard A4 portrait ratio matching worksheets
                }}
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-contain rounded-xl drop-shadow-sm"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Green CTA Button matching exact reference screenshot */}
        <div>
          <button
            onClick={onScrollToOffers}
            className="w-full sm:w-auto min-w-[220px] sm:min-w-[260px] px-8 py-3.5 rounded-full bg-[#057A4E] hover:bg-[#04633f] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center transform hover:scale-[1.02] active:scale-[0.99]"
          >
            <span>Quiero acceder ahora</span>
          </button>
        </div>

      </div>
    </section>
  );
};
