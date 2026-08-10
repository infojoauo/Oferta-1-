import React from 'react';
import { ArrowRight, Sparkles, Eye, Zap, Printer, FolderCheck, Puzzle, Laptop } from 'lucide-react';
import { IMAGE_ASSETS } from '../config';

interface HeroProps {
  onScrollToOffers: () => void;
  onOpenPreviewModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToOffers, onOpenPreviewModal }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-10 pb-16 md:pt-14 md:pb-20 border-b border-[#E8E2D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text Stack */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          
          {/* Eyebrow */}
          <div className="text-[#D25432] text-xs sm:text-sm font-extrabold uppercase tracking-widest">
            ATIENDE ADOLESCENTES SIN IMPROVISAR, SIN ADAPTAR Y SIN BLOQUEARTE.
          </div>

          {/* Main Display Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1C1917] tracking-tight leading-[1.1] font-serif-display">
            <span className="text-[#D25432]">+80 RECURSOS TERAPÉUTICOS </span>
            PARA CUALQUIER DEMANDA QUE ENTRE A TU CONSULTORIO.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#64748B] font-medium leading-relaxed max-w-2xl mx-auto">
            Material listo para aplicar, con el lenguaje que ellos respetan.
          </p>

        </div>

        {/* Hero Mockup Image */}
        <div className="mt-8 md:mt-12 relative max-w-4xl mx-auto">
          <div className="relative group rounded-2xl overflow-hidden bg-transparent">
            <img
              src={IMAGE_ASSETS.HERO_MOCKUP}
              alt="Kit Consultorio Teen Mockup"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover rounded-2xl drop-shadow-xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80";
              }}
            />

            {/* Interactive Preview Badge on image */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
              <button
                onClick={onOpenPreviewModal}
                className="bg-[#1C1917]/90 hover:bg-[#1C1917] text-white backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2 border border-white/20 transition-all hover:scale-105 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#D25432]" />
                <span>Ver muestra interactiva</span>
              </button>
            </div>
          </div>
        </div>

        {/* CTA Button below mockup */}
        <div className="mt-8 sm:mt-10 text-center space-y-4">
          <button
            onClick={onScrollToOffers}
            id="hero-cta-button"
            className="w-full sm:w-auto px-10 py-4 sm:py-5 rounded-full bg-[#D25432] hover:bg-[#b84223] text-white font-extrabold text-base sm:text-lg uppercase tracking-wider shadow-xl shadow-[#D25432]/25 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Quiero mi kit ahora</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Trust Social Proof Line */}
          <p className="text-xs sm:text-sm font-semibold text-[#78716C]">
            +2.000 psicólogos y terapeutas ya confían en nuestros Kits Terapéuticos.
          </p>

          {/* Feature Badges Row */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-[#44403C] font-semibold">
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#D25432]" />
              <span>Acceso inmediato tras la compra</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Printer className="w-4 h-4 text-[#D25432]" />
              <span>Imprime y usa en la misma sesión</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FolderCheck className="w-4 h-4 text-[#D25432]" />
              <span>Organizado por demanda clínica</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Puzzle className="w-4 h-4 text-[#D25432]" />
              <span>+80 recursos listos para usar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Laptop className="w-4 h-4 text-[#D25432]" />
              <span>Funciona online y presencial</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

