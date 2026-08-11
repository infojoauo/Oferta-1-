import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { RESOURCE_SAMPLES } from '../config';
import { ResourceSampleItem } from '../types';

interface ResourceCarouselProps {
  onScrollToOffers: () => void;
  onOpenPreviewModal?: (sample?: ResourceSampleItem) => void;
}

export const ResourceCarousel: React.FC<ResourceCarouselProps> = ({
  onScrollToOffers
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const targetScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const newIndex = Math.round(scrollLeft / (clientWidth * 0.75));
      setActiveIndex(Math.min(Math.max(newIndex, 0), RESOURCE_SAMPLES.length - 1));
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#D25432] border border-[#E8E2D8] text-xs font-black uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            VISTA PREVIA DEL MATERIAL
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-serif-display">
            Conoce el <span className="text-[#D25432]">material por dentro:</span>
          </h2>
          <p className="text-[#78716C] text-sm sm:text-base font-medium">
            Desliza hacia la derecha para explorar las herramientas terapéuticas listas para utilizar en tus sesiones.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="mt-10 relative max-w-6xl mx-auto">
          {/* Controls bar */}
          <div className="flex items-center justify-between gap-4 mb-6 px-1">
            <div className="text-xs sm:text-sm text-[#78716C] font-semibold">
              Mostrando <span className="font-extrabold text-[#1C1917]">{activeIndex + 1}</span> de <span className="font-extrabold text-[#1C1917]">{RESOURCE_SAMPLES.length}</span> recursos destacados
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Anterior recurso"
                className="p-3 rounded-full bg-white hover:bg-[#D25432] text-[#1C1917] hover:text-white transition-all cursor-pointer border border-[#E8E2D8] shadow-xs active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Siguiente recurso"
                className="p-3 rounded-full bg-white hover:bg-[#D25432] text-[#1C1917] hover:text-white transition-all cursor-pointer border border-[#E8E2D8] shadow-xs active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Draggable & Scrollable Carousel */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 pt-2 px-1 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {RESOURCE_SAMPLES.map((sample, idx) => (
              <motion.div
                key={sample.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="snap-center shrink-0 w-[280px] sm:w-[320px] md:w-[350px] rounded-2xl border border-[#E8E2D8] bg-white shadow-xs hover:shadow-xl hover:border-[#D25432] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 bg-[#FAF7F2] overflow-hidden border-b border-[#F5EFE6]">
                  {sample.imageKey ? (
                    <img
                      src={sample.imageKey}
                      alt={sample.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 text-stone-400 bg-stone-100 border border-dashed border-stone-300">
                      <span className="text-xs font-bold text-stone-500">{sample.title}</span>
                      <span className="text-[10px]">Bloque de muestra</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-[#1C1917]/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                    {sample.category}
                  </div>
                </div>

                {/* Phrase & Description below image */}
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-[#1C1917] text-base group-hover:text-[#D25432] transition-colors font-serif-display leading-snug">
                      {sample.title}
                    </h3>
                    <p className="text-[#78716C] text-xs sm:text-sm leading-relaxed font-medium">
                      "{sample.description}"
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F5EFE6] flex items-center justify-between text-xs font-bold text-[#2D5A27]">
                    <span>Material Terapéutico</span>
                    <span className="text-[#D25432] font-black group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {RESOURCE_SAMPLES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (scrollRef.current) {
                    const clientWidth = scrollRef.current.clientWidth;
                    scrollRef.current.scrollTo({
                      left: idx * (clientWidth * 0.75),
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`Ver recurso ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === activeIndex ? 'w-8 bg-[#D25432]' : 'w-2.5 bg-[#E8E2D8] hover:bg-[#D25432]/50'
                }`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <button
              onClick={onScrollToOffers}
              className="px-8 py-4 rounded-full bg-[#D25432] hover:bg-[#b84223] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer transform hover:scale-105"
            >
              <span>Ver todo lo que está incluido</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};


