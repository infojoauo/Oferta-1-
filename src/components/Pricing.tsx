import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import { BASIC_OFFER_URL, COMPLETE_OFFER_URL, IMAGE_ASSETS } from '../config';
import { useCurrency } from '../context/CurrencyContext';

interface PricingProps {
  basicUrl?: string;
  completeUrl?: string;
}

export const Pricing: React.FC<PricingProps> = ({
  basicUrl = BASIC_OFFER_URL,
  completeUrl = COMPLETE_OFFER_URL
}) => {
  const currency = useCurrency();
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 14, seconds: 52 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 0, minutes: 15, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCheckout = (url: string) => {
    if (url && url !== "COLOCAR_LINK_HOTMART_US5_AQUI" && url !== "COLOCAR_LINK_HOTMART_US10_AQUI") {
      window.open(url, '_blank');
    } else {
      alert(`[Redirección a Checkout Hotmart]\n\nEnlace seleccionado: ${url}\n\nPuedes configurar tus enlaces reales de Hotmart haciendo clic en el ícono de engranaje en la parte superior derecha.`);
    }
  };

  return (
    <section id="ofertas" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Timer & Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-6">
          
          {/* Countdown Timer Block */}
          <div className="inline-flex flex-col items-center space-y-3">
            {/* Top Orange Badge */}
            <div className="px-5 py-1.5 rounded-full bg-[#D25432] text-white text-xs font-black uppercase tracking-wider shadow-md">
              OFERTA LIMITADA — TERMINA EN
            </div>

            {/* Countdown Digits */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 pt-1">
              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-[#1C1917] text-white flex items-center justify-center text-xl sm:text-3xl font-black shadow-md border border-[#2B2725]">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#78716C] uppercase tracking-wider mt-1.5">
                  HORAS
                </span>
              </div>

              <span className="text-lg sm:text-2xl font-bold text-[#1C1917] pb-5">:</span>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-[#1C1917] text-white flex items-center justify-center text-xl sm:text-3xl font-black shadow-md border border-[#2B2725]">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#78716C] uppercase tracking-wider mt-1.5">
                  MINUTOS
                </span>
              </div>

              <span className="text-lg sm:text-2xl font-bold text-[#1C1917] pb-5">:</span>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-[#1C1917] text-white flex items-center justify-center text-xl sm:text-3xl font-black shadow-md border border-[#2B2725]">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-[#78716C] uppercase tracking-wider mt-1.5">
                  SEGUNDOS
                </span>
              </div>
            </div>
          </div>

          {/* Sub-badge & Title */}
          <div className="space-y-2 pt-1">
            <div className="inline-block bg-[#DCFCE7] text-[#166534] px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider border border-[#2D5A27]/20 shadow-2xs">
              INVIERTE EN TU EQUIPO
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-serif-display">
              Elige Tu Oferta
            </h2>
            <p className="text-[#78716C] text-sm sm:text-base font-medium max-w-lg mx-auto">
              Compara las opciones y selecciona el formato de recursos ideal para tu práctica clínica.
            </p>
          </div>

        </div>

        {/* Pricing Cards Grid — Exactly 2 Offers */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* CARD 1: KIT BÁSICO (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-[#E8E2D8] shadow-sm p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5 text-center">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#78716C]">
                  OPCIÓN BÁSICA
                </span>
                <h3 className="text-2xl font-extrabold text-[#1C1917] font-serif-display mt-1">
                  KIT BÁSICO
                </h3>
                <p className="text-xs font-bold text-[#D25432] uppercase tracking-wider mt-0.5">
                  50 Recursos Terapéuticos
                </p>
              </div>

              {/* Mockup */}
              <div className="w-36 mx-auto aspect-square bg-[#FAF7F2] rounded-xl overflow-hidden p-2 border border-[#E8E2D8] flex items-center justify-center">
                {IMAGE_ASSETS.BASIC_KIT_MOCKUP ? (
                  <img
                    src={IMAGE_ASSETS.BASIC_KIT_MOCKUP}
                    alt="Kit Básico"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-2 text-stone-400 bg-stone-100 border border-dashed border-stone-300 rounded-lg">
                    <span className="text-xs font-bold text-stone-500">Kit Básico</span>
                    <span className="text-[10px]">Bloque de imagen</span>
                  </div>
                )}
              </div>

              {/* Price */}
              <div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-base sm:text-lg font-bold text-red-600 line-through tracking-tight">
                    {currency.formatAmount ? currency.formatAmount(10) : 'US$10'}
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-[#1C1917] font-serif-display">
                    {currency.basicPriceFormatted}
                  </div>
                </div>
                <p className="text-xs text-[#78716C] pt-1 font-medium">
                  Pago único • Formato digital
                </p>
                {currency.isConverted && (
                  <p className="text-[11px] text-[#78716C] pt-2 leading-tight font-medium max-w-xs mx-auto italic">
                    {currency.disclaimerText}
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                onClick={() => handleCheckout(basicUrl)}
                className="w-full py-3.5 px-4 rounded-full border-2 border-[#1C1917] font-bold text-[#1C1917] hover:bg-[#FAF7F2] transition-colors text-xs uppercase tracking-wider cursor-pointer flex items-center justify-center"
              >
                <span className="whitespace-nowrap">QUIERO EL KIT BÁSICO</span>
              </button>

              {/* Checklist */}
              <ul className="text-left space-y-3 pt-3 text-xs sm:text-sm text-[#44403C] font-medium border-t border-[#E8E2D8]">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
                  <span>50 recursos terapéuticos</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
                  <span>Material digital en PDF</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
                  <span>Acceso al contenido adquirido</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CARD 2: KIT COMPLETO (7 cols - Featured Prominent) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#2D5A27] text-white shadow-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden space-y-6 border-2 border-emerald-400/40">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="bg-[#D25432] text-white font-extrabold text-[11px] uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span>⭐ MÁS ELEGIDO</span>
              </div>
              <div className="bg-white/10 border border-white/20 text-emerald-100 font-extrabold text-[11px] uppercase tracking-widest px-3.5 py-1 rounded-full">
                MEJOR RELACIÓN VALOR / PRECIO
              </div>
            </div>

            <div className="space-y-5 text-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif-display">
                  KIT COMPLETO
                </h3>
                <p className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wider mt-0.5">
                  130+ Recursos + Juegos Terapéuticos
                </p>
              </div>

              {/* Mockup */}
              <div className="w-44 mx-auto aspect-square rounded-xl overflow-hidden bg-white/10 p-1 border border-white/20 flex items-center justify-center">
                {IMAGE_ASSETS.COMPLETE_KIT_MOCKUP ? (
                  <img
                    src={IMAGE_ASSETS.COMPLETE_KIT_MOCKUP}
                    alt="Kit Completo"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-2 text-emerald-200 bg-white/10 border border-dashed border-white/30 rounded-lg">
                    <span className="text-xs font-bold text-white">Kit Completo</span>
                    <span className="text-[10px] text-emerald-200">Bloque de imagen</span>
                  </div>
                )}
              </div>

              {/* Price */}
              <div>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-lg sm:text-xl font-bold text-red-400 sm:text-red-300 line-through tracking-tight">
                    {currency.formatAmount ? currency.formatAmount(27) : 'US$27'}
                  </span>
                  <div className="text-3xl sm:text-5xl font-black text-white font-serif-display">
                    {currency.completePriceFormatted}
                  </div>
                </div>
                <p className="text-xs text-emerald-100 pt-1 font-medium">
                  Pago único • Acceso inmediato
                </p>
                {currency.isConverted && (
                  <p className="text-[11px] text-emerald-100/90 pt-2 leading-tight font-medium max-w-xs mx-auto italic">
                    {currency.disclaimerText}
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                onClick={() => handleCheckout(completeUrl)}
                className="w-full py-4 px-3 sm:px-6 rounded-full bg-[#D25432] hover:bg-[#b84223] text-white font-extrabold text-xs sm:text-base uppercase tracking-wider shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="whitespace-nowrap">QUIERO EL KIT COMPLETO</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
              </button>

              {/* Checklist */}
              <ul className="text-left space-y-3 pt-3 text-xs sm:text-sm text-white font-medium border-t border-emerald-700/60">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>130+ recursos terapéuticos</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Material digital en PDF</span>
                </li>
                <li className="flex items-start gap-2.5 font-bold text-amber-300">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Bono: Kit de Juegos y Dinámicas Terapéuticas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Más variedad de herramientas</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


