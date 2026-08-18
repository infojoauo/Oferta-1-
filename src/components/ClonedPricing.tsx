import React, { useState, useEffect } from 'react';
import { 
  Check, 
  ArrowRight, 
  Gamepad2, 
  Lock, 
  ShieldCheck, 
  Download, 
  Image as ImageIcon 
} from 'lucide-react';
import { IMAGE_ASSETS } from '../config';

interface ClonedPricingProps {
  basicUrl: string;
  completeUrl: string;
  onSelectBasic: () => void;
}

export const ClonedPricing: React.FC<ClonedPricingProps> = ({
  basicUrl,
  completeUrl,
  onSelectBasic
}) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 54, seconds: 44 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 2, minutes: 54, seconds: 44 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => String(n).padStart(2, '0');

  const handleCheckoutComplete = () => {
    if (completeUrl) {
      window.open(completeUrl, '_blank');
    }
  };

  return (
    <section id="ofertas" className="bg-[#FAF7F2] py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Scarcity Header */}
        <p className="text-stone-700 text-xs sm:text-sm font-semibold mb-2">
          Oferta por tiempo limitado. Asegura el tuyo antes de que se termine.
        </p>

        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 uppercase tracking-wider mb-3">
          <span>⏰ OFERTA VÁLIDA HASTA LA MEDIANOCHE</span>
        </div>

        {/* 3 Dark Countdown Boxes */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-10">
          <div className="flex flex-col items-center">
            <div className="w-14 sm:w-16 h-12 sm:h-14 bg-[#0F172A] text-white font-mono font-black text-2xl sm:text-3xl rounded-xl flex items-center justify-center shadow-md">
              {format(timeLeft.hours)}
            </div>
            <span className="text-[10px] font-bold text-stone-500 uppercase mt-1">Horas</span>
          </div>
          <span className="text-xl font-bold text-slate-800 -mt-4">:</span>
          <div className="flex flex-col items-center">
            <div className="w-14 sm:w-16 h-12 sm:h-14 bg-[#0F172A] text-white font-mono font-black text-2xl sm:text-3xl rounded-xl flex items-center justify-center shadow-md">
              {format(timeLeft.minutes)}
            </div>
            <span className="text-[10px] font-bold text-stone-500 uppercase mt-1">Min</span>
          </div>
          <span className="text-xl font-bold text-slate-800 -mt-4">:</span>
          <div className="flex flex-col items-center">
            <div className="w-14 sm:w-16 h-12 sm:h-14 bg-[#0F172A] text-white font-mono font-black text-2xl sm:text-3xl rounded-xl flex items-center justify-center shadow-md">
              {format(timeLeft.seconds)}
            </div>
            <span className="text-[10px] font-bold text-stone-500 uppercase mt-1">Seg</span>
          </div>
        </div>

        {/* 2 DISTINCT OFFERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-center items-stretch max-w-4xl mx-auto">
          
          {/* ========================================================= */}
          {/* OFERTA 1: KIT BÁSICO (De 15 por 5)                        */}
          {/* ========================================================= */}
          <div className="bg-white rounded-3xl overflow-hidden border border-stone-300 shadow-md flex flex-col justify-between text-center relative hover:shadow-lg transition-all">
            
            {/* Top Gray/Stone Badge */}
            <div className="bg-stone-700 text-white py-2 px-4 text-xs font-black uppercase tracking-wider">
              <span>OPCIÓN BÁSICA</span>
            </div>

            <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
              
              {/* Offer Title & Tag */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-1">
                  Kit Básico
                </h3>
                <span className="inline-block px-3 py-0.5 rounded-full bg-stone-100 text-stone-700 text-[11px] font-bold uppercase tracking-wider">
                  +100 Recursos Esenciales
                </span>
              </div>

              {/* Prepared mockup container */}
              <div className="max-w-xs mx-auto w-full">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-stone-50 p-2 flex items-center justify-center border border-stone-200">
                  {IMAGE_ASSETS.BASIC_KIT_MOCKUP ? (
                    <img
                      src={IMAGE_ASSETS.BASIC_KIT_MOCKUP}
                      alt="Kit Básico"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full rounded-lg bg-white border border-dashed border-stone-300 flex flex-col items-center justify-center text-stone-400 p-2 text-center">
                      <ImageIcon className="w-8 h-8 stroke-[1.2] mb-1 text-stone-300" />
                      <span className="text-[10px] font-bold text-stone-400 uppercase">Espacio Imagen</span>
                      <span className="text-[9px] text-stone-400">Kit Básico</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price section (De $15 por $5 USD) */}
              <div className="flex flex-col items-center justify-center">
                
                {/* Badge Discount + Strikethrough Original Price */}
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className="px-1.5 py-0.5 rounded-md bg-[#DC2626] text-white font-extrabold text-[11px] leading-none tracking-tight">
                    -67%
                  </span>
                  <span className="text-sm sm:text-base font-bold text-stone-400 line-through decoration-[#DC2626] decoration-[1.5px]">
                    $15 USD
                  </span>
                </div>

                {/* HOY SOLO label */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-0.5">
                  HOY SOLO
                </span>

                {/* Big Price */}
                <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
                  $5 USD
                </div>
                <p className="text-[11px] text-stone-500 font-semibold mt-1.5">
                  pago único • acceso inmediato
                </p>
              </div>

              {/* CTA Button (Single line on all screen sizes) */}
              <button
                onClick={onSelectBasic}
                className="w-full py-3.5 px-2 sm:px-4 rounded-full bg-slate-800 hover:bg-slate-900 text-white font-extrabold text-[11px] sm:text-xs md:text-[13px] uppercase tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <span className="whitespace-nowrap">Quiero el Kit Básico ($5)</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </button>

              {/* Checklist items */}
              <div className="space-y-2.5 text-left pt-3 border-t border-stone-100 text-xs font-bold text-stone-800">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Más de 100 recursos terapéuticos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Organizados por demanda clínica</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Acceso inmediato en PDF A4</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Garantía de 7 días</span>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================= */}
          {/* OFERTA 2: KIT COMPLETO ($10 USD)                          */}
          {/* ========================================================= */}
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-[#008751] shadow-xl flex flex-col justify-between text-center relative hover:shadow-2xl transition-all">
            
            {/* Green Top Badge */}
            <div className="bg-[#008751] text-white py-2 px-4 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5">
              <span>🔥 MÁS VENDIDO • RECOMENDADO</span>
            </div>

            <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
              
              {/* Offer Title & Tag */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-1">
                  Kit Completo
                </h3>
                <span className="inline-block px-3 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] border border-[#BBF7D0] text-[11px] font-black uppercase tracking-wider">
                  ✨ +130 Recursos + Bono + Ficha
                </span>
              </div>

              {/* Prepared mockup container */}
              <div className="max-w-xs mx-auto w-full">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-stone-50 p-2 flex items-center justify-center border border-stone-200">
                  {IMAGE_ASSETS.COMPLETE_KIT_MOCKUP ? (
                    <img
                      src={IMAGE_ASSETS.COMPLETE_KIT_MOCKUP}
                      alt="Kit Completo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full rounded-lg bg-white border border-dashed border-emerald-300 flex flex-col items-center justify-center text-stone-400 p-2 text-center">
                      <ImageIcon className="w-8 h-8 stroke-[1.2] mb-1 text-emerald-400" />
                      <span className="text-[10px] font-bold text-emerald-700 uppercase">Espacio Imagen</span>
                      <span className="text-[9px] text-stone-400">Kit Completo</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price section (De $20 por $10 USD) */}
              <div className="flex flex-col items-center justify-center">
                
                {/* Badge Discount + Strikethrough Original Price */}
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className="px-1.5 py-0.5 rounded-md bg-[#DC2626] text-white font-extrabold text-[11px] leading-none tracking-tight">
                    -50%
                  </span>
                  <span className="text-sm sm:text-base font-bold text-stone-400 line-through decoration-[#DC2626] decoration-[1.5px]">
                    $20 USD
                  </span>
                </div>

                {/* HOY SOLO label */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#008751] block mb-0.5">
                  HOY SOLO
                </span>

                {/* Big Price */}
                <div className="text-4xl sm:text-5xl font-black text-[#008751] tracking-tight leading-none">
                  $10 USD
                </div>
                <p className="text-[11px] text-stone-500 font-semibold mt-1.5">
                  pago único • acceso inmediato
                </p>
              </div>

              {/* CTA Button (Single line on all screen sizes) */}
              <button
                onClick={handleCheckoutComplete}
                className="w-full py-4 px-2 sm:px-4 rounded-full bg-[#008751] hover:bg-[#007043] text-white font-extrabold text-[11px] sm:text-xs md:text-[13px] uppercase tracking-wide shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <span className="whitespace-nowrap">Quiero el kit completo ($10)</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </button>

              {/* Checklist items */}
              <div className="space-y-2.5 text-left pt-2 border-t border-stone-100 text-xs font-bold text-stone-800">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#008751] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>+130 recursos terapéuticos lúdicos</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#008751] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Organizados por demanda clínica</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#008751] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Acceso inmediato en PDF</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#008751] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Más técnicas y dinámicas proyectivas</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#008751] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Ficha Técnica Completa en PDF</span>
                </div>
              </div>

              {/* Yellow Box for Included Bonus (Spanish Bono) */}
              <div className="bg-[#FFFBEB] rounded-2xl p-3.5 border border-[#FDE68A] text-left space-y-1.5">
                <div className="flex items-center justify-between border-b border-[#FDE68A] pb-1.5">
                  <span className="text-[11px] font-black uppercase text-[#92400E] flex items-center gap-1">
                    🎁 BONO INCLUIDO
                  </span>
                  <span className="text-[10px] font-extrabold text-[#008751]">
                    <span className="line-through text-stone-400 font-bold">$15 USD</span> GRATIS
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-bold text-stone-800">
                  <Gamepad2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>BONO: Juegos Terapéuticos de Conexión</span>
                </div>
              </div>

              {/* Footer Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] sm:text-[11px] font-bold text-stone-500 pt-1">
                <span className="inline-flex items-center gap-1">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  Pago 100% seguro
                </span>
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  7 días de garantía
                </span>
                <span className="inline-flex items-center gap-1">
                  <Download className="w-3 h-3 text-emerald-600" />
                  Acceso digital
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
