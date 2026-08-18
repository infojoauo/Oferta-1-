import React from 'react';
import { Gamepad2, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { IMAGE_ASSETS } from '../config';

interface BonusesClonedProps {
  onScrollToOffers?: () => void;
}

export const BonusesCloned: React.FC<BonusesClonedProps> = ({ onScrollToOffers }) => {
  const bonus = {
    title: 'BONO: JUEGOS TERAPÉUTICOS',
    desc: 'Colección especial de juegos, dinámicas lúdicas y actividades de conexión diseñadas para facilitar la expresión emocional, derretir la resistencia y crear vínculo terapéutico en sesión.',
    realVal: '$15 USD',
    icon: <Gamepad2 className="w-5 h-5 text-[#008751]" />,
    iconBg: 'bg-emerald-100',
    imageSrc: IMAGE_ASSETS.BONUS_MOCKUP || ''
  };

  return (
    <section className="bg-[#FAF7F2] py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Yellow pill tag */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
          <span>🎁 BONO EXCLUSIVO DE REGALO</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-8">
          Bono Incluido Hoy
        </h2>

        {/* Single Bonus Card */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-md text-left flex flex-col justify-between mb-7">
          
          {/* Bonus Image Container */}
          <div className="p-3 sm:p-4 flex justify-center bg-stone-50/70 border-b border-stone-100">
            <div className="w-full flex items-center justify-center">
              {bonus.imageSrc ? (
                <img
                  src={bonus.imageSrc}
                  alt={bonus.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[300px] object-contain rounded-lg drop-shadow-sm"
                />
              ) : (
                <div className="w-full h-48 rounded-lg bg-stone-50 border-2 border-dashed border-stone-200 flex flex-col items-center justify-center text-stone-400 p-4 text-center">
                  <ImageIcon className="w-8 h-8 stroke-[1.3] mb-1.5 text-stone-300" />
                  <span className="text-[11px] font-bold text-stone-400 uppercase">Espacio preparado para imagen</span>
                  <span className="text-[10px] text-stone-400">Juegos Terapéuticos</span>
                </div>
              )}
            </div>
          </div>

          {/* Content info */}
          <div className="p-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${bonus.iconBg} shrink-0`}>
                {bonus.icon}
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                {bonus.title}
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
              {bonus.desc}
            </p>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
              <span className="text-xs sm:text-sm text-stone-400 font-bold line-through whitespace-nowrap">
                {bonus.realVal} valor real
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#008751] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider whitespace-nowrap">
                GRATIS HOY CON TU KIT
              </span>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        {onScrollToOffers && (
          <div>
            <button
              onClick={onScrollToOffers}
              className="px-8 py-3.5 rounded-full bg-[#008751] hover:bg-[#007043] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.99]"
            >
              <span>Quiero mi kit ahora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
