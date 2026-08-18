import React from 'react';
import { 
  Check, 
  ShieldCheck, 
  Zap, 
  Lock, 
  Mail, 
  Activity,
  Sparkles,
  Layers,
  Cloud,
  Droplet,
  Heart
} from 'lucide-react';
import { IMAGE_ASSETS } from '../config';

interface ClonedHeroProps {
  onScrollToOffers: () => void;
}

export const ClonedHero: React.FC<ClonedHeroProps> = ({ onScrollToOffers }) => {
  // Demand pills exactly matching Reference Screenshot 1
  const tags = [
    { label: 'Ansiedad', icon: <Activity className="w-3.5 h-3.5" /> },
    { label: 'TDAH', icon: <Zap className="w-3.5 h-3.5" /> },
    { label: 'TEA', icon: <Layers className="w-3.5 h-3.5" /> },
    { label: 'Duelo', icon: <Cloud className="w-3.5 h-3.5" /> },
    { label: 'Comportamiento', icon: <Droplet className="w-3.5 h-3.5" /> },
    { label: 'Emociones', icon: <Heart className="w-3.5 h-3.5" /> },
  ];

  // 5 full-width white cards stacked matching Reference Screenshot 2 (with requested 130 recursos)
  const checkItems = [
    'Acceso inmediato después de la compra',
    'Imprime y usa en la misma sesión',
    'Organizado por demanda clínica',
    '+130 recursos listos para usar',
    'Funciona online y presencial',
  ];

  return (
    <section className="bg-[#FAF7F2] pt-6 pb-12 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
      <div className="max-w-xl sm:max-w-2xl mx-auto text-center">
        
        {/* Top Badges matching Screenshot 1 */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
          <span className="px-3 py-1 rounded-full bg-[#E0F8F1] text-[#0A7E56] font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider border border-[#B9EEDB]">
            KIT CONSULTORIO LÚDICO
          </span>
          <span className="px-3.5 py-1 rounded-full bg-[#B6F3D8] text-[#065A3D] font-bold text-xs sm:text-[13px] border border-[#8AEABF]">
            ¿Cansados de improvisar cada sesión infantil?
          </span>
        </div>

        {/* H1 Headline matching Screenshot 1 with requested 130 recursos */}
        <h1 className="text-2xl sm:text-3xl md:text-[34px] font-black leading-[1.2] tracking-tight mb-3">
          <span className="text-[#057A4E]">+130 recursos terapéuticos </span>
          <span className="text-[#0F172A]">para aplicar en cualquier </span>
          <span className="text-[#057A4E]">sesión infantil</span>
        </h1>

        {/* Subtitle */}
        <p className="text-stone-600 font-medium text-xs sm:text-sm mb-4">
          Organizados por demanda clínica. Imprime y aplica.
        </p>

        {/* 6 Tags arranged like reference (row 1: 5 tags, row 2: Emociones centered) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-lg mx-auto mb-6">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E4FAF1] text-[#0A7E56] font-bold text-xs sm:text-[13px] border border-[#B1F1D4] shadow-2xs"
            >
              <span className="text-[#0A7E56]">{tag.icon}</span>
              <span>{tag.label}</span>
            </span>
          ))}
        </div>

        {/* Hero Mockup Image matching Screenshot 1 (Enlarged and optimized) */}
        <div className="max-w-xl sm:max-w-2xl mx-auto mb-7 px-1">
          <div className="w-full flex items-center justify-center">
            <img
              src={IMAGE_ASSETS.HERO_MOCKUP}
              alt="Kit Lúdico Terapéutico Infantil"
              referrerPolicy="no-referrer"
              className="w-full max-w-[560px] h-auto object-contain drop-shadow-lg transform hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        </div>

        {/* 5 Stacked Full-Width Checklist Cards matching Screenshot 2 */}
        <div className="space-y-2.5 max-w-lg mx-auto mb-6 text-left">
          {checkItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 sm:p-3.5 bg-white rounded-xl border border-stone-200 shadow-2xs hover:border-stone-300 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-[#057A4E] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-slate-800">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Italic emotional text matching Screenshot 2 */}
        <div className="italic text-stone-700 text-xs sm:text-[13px] font-medium mb-5 space-y-0.5 text-center">
          <p>Basta de gastar horas buscando material.</p>
          <p className="font-bold text-stone-900">Tendrás la herramienta correcta para cada niño.</p>
        </div>

        {/* CTA Button matching Screenshot 2 */}
        <div className="mb-5">
          <button
            onClick={onScrollToOffers}
            className="w-full sm:w-auto min-w-[240px] sm:min-w-[280px] px-8 py-3.5 rounded-full bg-[#057A4E] hover:bg-[#04633f] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center transform hover:scale-[1.02] active:scale-[0.99]"
          >
            <span>Quiero mi kit ahora</span>
          </button>
        </div>

        {/* Micro Trust Icons matching Screenshot 2 */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-bold text-[#057A4E]">
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-[#057A4E]" />
            <span>Acceso inmediato</span>
          </div>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#057A4E]" />
            <span>Garantía de 7 días</span>
          </div>
          <div className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-[#057A4E]" />
            <span>Pago seguro</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-3 h-3 text-[#057A4E]" />
            <span>Entrega por correo</span>
          </div>
        </div>

      </div>
    </section>
  );
};
