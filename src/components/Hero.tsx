import React from 'react';
import { ArrowRight, Sparkles, Zap, FileText, FolderCheck } from 'lucide-react';
import { IMAGE_ASSETS } from '../config';

interface HeroProps {
  onScrollToOffers: () => void;
  onOpenPreviewModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToOffers }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-10 sm:py-14 lg:py-20 border-b border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Layout depending on whether HERO_MOCKUP exists */}
        <div className={`grid grid-cols-1 ${IMAGE_ASSETS.HERO_MOCKUP ? 'lg:grid-cols-12' : ''} gap-8 lg:gap-12 items-center`}>
          
          {/* LEFT / CENTER COLUMN: Text Content */}
          <div className={`${IMAGE_ASSETS.HERO_MOCKUP ? 'lg:col-span-7 text-center lg:text-left items-center lg:items-start' : 'max-w-3xl mx-auto text-center items-center'} space-y-6 flex flex-col`}>
            
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D25432]/10 text-[#D25432] border border-[#D25432]/20 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                OFERTA LIMITADA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-black uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                ACCESO INMEDIATO
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1917] tracking-tight leading-[1.15] font-serif-display">
              Deja de improvisar en tus sesiones con adolescentes.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#57534E] font-medium leading-relaxed max-w-2xl">
              Accede a más de 130 recursos terapéuticos prácticos para trabajar emociones, autoestima, pensamientos, habilidades sociales, ansiedad, toma de decisiones y mucho más.
            </p>

            {/* Quick Destaques / Key Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm font-semibold text-[#44403C] text-left w-full max-w-xl">
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

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full">
              <button
                onClick={onScrollToOffers}
                id="hero-cta-button"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D25432] hover:bg-[#b84223] text-white font-extrabold text-base uppercase tracking-wider shadow-xl shadow-[#D25432]/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>QUIERO MI KIT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Product Mockup (Only rendered if HERO_MOCKUP is set) */}
          {IMAGE_ASSETS.HERO_MOCKUP && (
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-2xl overflow-hidden shadow-lg bg-[#FAF7F2] border border-[#E8E2D8]">
                <img
                  src={IMAGE_ASSETS.HERO_MOCKUP}
                  alt="Kit Terapéutico para Adolescentes Mockup"
                  referrerPolicy="no-referrer"
                  width="500"
                  height="500"
                  loading="eager"
                  // @ts-ignore
                  fetchPriority="high"
                  decoding="async"
                  onError={(e) => {
                    // Fallback to direct raw image if CDN proxy ever fails
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = 'https://i.ibb.co/ZRCfZJpf/98c9e8a8-ec15-4562-a63a-4c8d8099ad4c.png';
                    }
                  }}
                  className="w-full h-full object-cover rounded-2xl transition-opacity duration-300"
                />
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};


