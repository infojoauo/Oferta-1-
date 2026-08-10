import React from 'react';
import { ArrowRight, Sparkles, Eye, Zap, FileText, FolderCheck } from 'lucide-react';
import { IMAGE_ASSETS } from '../config';

interface HeroProps {
  onScrollToOffers: () => void;
  onOpenPreviewModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToOffers, onOpenPreviewModal }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-10 sm:py-14 lg:py-20 border-b border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop 2-column layout / Mobile 1-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D25432]/10 text-[#D25432] border border-[#D25432]/20 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                +100 RECURSOS TERAPÉUTICOS
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-[#44403C] border border-[#E8E2D8] text-xs font-bold shadow-2xs">
                Material digital • Acceso inmediato
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1917] tracking-tight leading-[1.15] font-serif-display">
              Deja de improvisar en tus sesiones con adolescentes.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#57534E] font-medium leading-relaxed max-w-2xl">
              Accede a más de 100 recursos terapéuticos prácticos para trabajar emociones, autoestima, pensamientos, habilidades sociales, ansiedad, toma de decisiones y mucho más.
            </p>

            {/* Quick Destaques / Key Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm font-semibold text-[#44403C]">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#DCFCE7] text-[#2D5A27] flex items-center justify-center text-xs shrink-0 font-bold">✓</div>
                <span>Organizado por temas clínicos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#DCFCE7] text-[#2D5A27] flex items-center justify-center text-xs shrink-0 font-bold">✓</div>
                <span>Listos para imprimir o proyectar</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#DCFCE7] text-[#2D5A27] flex items-center justify-center text-xs shrink-0 font-bold">✓</div>
                <span>Ideal para sesiones presenciales u online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#DCFCE7] text-[#2D5A27] flex items-center justify-center text-xs shrink-0 font-bold">✓</div>
                <span>Incluye bono especial de juegos</span>
              </div>
            </div>

            {/* CTA Button & Interactive Sample Link */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onScrollToOffers}
                id="hero-cta-button"
                className="px-8 py-4 rounded-full bg-[#D25432] hover:bg-[#b84223] text-white font-extrabold text-base uppercase tracking-wider shadow-xl shadow-[#D25432]/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>QUIERO MI KIT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenPreviewModal}
                className="px-5 py-4 rounded-full bg-white hover:bg-[#F5EFE6] text-[#1C1917] border border-[#E8E2D8] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
              >
                <Eye className="w-4 h-4 text-[#D25432]" />
                <span>Ver muestra interactiva</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Compact Square Product Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-2xl overflow-hidden bg-white border border-[#E8E2D8] shadow-xl group p-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img
                  src={IMAGE_ASSETS.HERO_MOCKUP}
                  alt="Kit Terapéutico para Adolescentes Mockup"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                <div className="absolute bottom-3 left-3 right-3 text-white text-left p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/20">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-300">Kit Digital en PDF</p>
                  <p className="text-xs sm:text-sm font-semibold text-white truncate">100+ Recursos Terapéuticos + Bono de Juegos</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


