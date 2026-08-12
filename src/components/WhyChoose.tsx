import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Layers, Zap, FolderCheck, Eye, FileText, Sliders, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../config';

interface WhyChooseProps {
  onScrollToOffers?: () => void;
}

const getBenefitIcon = (iconName: string) => {
  switch (iconName) {
    case 'Layers': return <Layers className="w-6 h-6 text-[#2D5A27]" />;
    case 'Zap': return <Zap className="w-6 h-6 text-[#D25432]" />;
    case 'FolderCheck': return <FolderCheck className="w-6 h-6 text-[#2D5A27]" />;
    case 'Eye': return <Eye className="w-6 h-6 text-[#D25432]" />;
    case 'FileText': return <FileText className="w-6 h-6 text-[#2D5A27]" />;
    case 'Sliders': return <Sliders className="w-6 h-6 text-[#D25432]" />;
    default: return <Layers className="w-6 h-6 text-[#2D5A27]" />;
  }
};

export const WhyChoose: React.FC<WhyChooseProps> = ({ onScrollToOffers }) => {
  // Only display 4 items as requested
  const top4Items = WHY_CHOOSE_ITEMS.slice(0, 4);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.75;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-10"
        >
          <div className="inline-block bg-white text-[#2D5A27] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#E8E2D8] shadow-2xs">
            Beneficios Clave para el Profesional
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-serif-display">
            ¿Por qué tener un <span className="text-[#D25432]">kit de recursos terapéuticos</span>?
          </h2>
          <p className="text-[#78716C] text-sm sm:text-base font-medium leading-relaxed">
            Diseñado especialmente para la práctica clínica con adolescentes, optimizando tu preparación previa y enriqueciendo tus sesiones.
          </p>
        </motion.div>

        {/* Carousel Container with Arrows on Mobile */}
        <div className="relative">
          {/* Mobile Arrow Controls (Absolute side buttons) */}
          <button
            onClick={() => scroll('left')}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-[#D25432] shadow-lg border border-[#E8E2D8] flex items-center justify-center active:scale-90 transition-transform"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-[#D25432] shadow-lg border border-[#E8E2D8] flex items-center justify-center active:scale-90 transition-transform"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* 4 Benefit Cards: Carousel on mobile, Grid on desktop */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory pb-6 pt-2 -mx-4 px-8 gap-4 md:mx-0 md:px-0 md:pb-0 md:pt-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 scrollbar-none scroll-smooth"
          >
            {top4Items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="snap-center shrink-0 w-[80vw] sm:w-[320px] md:w-auto md:shrink group relative p-5 rounded-2xl bg-white border border-[#E8E2D8] hover:border-[#D25432] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Top Accent Line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D25432] to-[#2D5A27] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Image with Icon overlay */}
                  {item.imageUrl ? (
                    <div className="w-full h-36 mb-4 rounded-xl overflow-hidden bg-[#FAF7F2] border border-[#E8E2D8] relative group-hover:border-[#D25432]/30 transition-colors">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 p-2 rounded-lg bg-white/95 backdrop-blur-xs text-[#2D5A27] shadow-sm border border-[#E8E2D8]">
                        {getBenefitIcon(item.iconName)}
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-36 mb-4 rounded-xl bg-stone-100 border-2 border-dashed border-stone-300 relative flex flex-col items-center justify-center p-3 text-center transition-colors group-hover:border-[#D25432]/50 group-hover:bg-stone-50">
                      <div className="p-2 rounded-lg bg-white text-[#2D5A27] shadow-xs border border-stone-200 mb-1">
                        {getBenefitIcon(item.iconName)}
                      </div>
                      <span className="text-xs font-bold text-stone-600 line-clamp-1">{item.title}</span>
                      <span className="text-[10px] text-stone-400 font-medium">Bloque de imagen</span>
                    </div>
                  )}

                  <h3 className="text-base sm:text-lg font-bold text-[#1C1917] mb-2 font-serif-display group-hover:text-[#D25432] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#78716C] text-xs sm:text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent tag */}
                <div className="mt-5 pt-3 border-t border-[#F5EFE6] flex items-center justify-between text-[11px] font-bold text-[#2D5A27] opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Beneficio Clave</span>
                  <span className="group-hover:translate-x-1.5 transition-transform text-[#D25432] font-black">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation controls bottom bar */}
        <div className="flex md:hidden items-center justify-between px-2 mt-2">
          <button
            onClick={() => scroll('left')}
            className="flex items-center gap-1 text-xs font-bold text-[#D25432] bg-white px-3 py-1.5 rounded-full border border-[#E8E2D8] shadow-2xs active:scale-95 transition-transform"
          >
            <ChevronLeft className="w-4 h-4" /> Anterior
          </button>
          
          <div className="text-xs text-stone-500 font-medium flex items-center gap-1">
            <span>Desliza o usa las flechas</span>
          </div>

          <button
            onClick={() => scroll('right')}
            className="flex items-center gap-1 text-xs font-bold text-[#D25432] bg-white px-3 py-1.5 rounded-full border border-[#E8E2D8] shadow-2xs active:scale-95 transition-transform"
          >
            Siguiente <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom CTA Banner Callout with Motion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-8 rounded-3xl bg-[#D25432] text-white text-center max-w-4xl mx-auto shadow-xl space-y-5 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif-display leading-tight">
              Herramientas pensadas exclusivamente para el lenguaje y la etapa adolescente.
            </h3>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-medium mt-2">
              Simplifica tu rutina profesional y ten siempre a la mano el material adecuado para cada demanda en tu consultorio.
            </p>
            {onScrollToOffers && (
              <div className="pt-4">
                <button
                  onClick={onScrollToOffers}
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-stone-100 text-[#D25432] font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Ver opciones de kit</span>
                  <ArrowRight className="w-4 h-4 text-[#D25432]" />
                </button>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};



