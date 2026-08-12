import React from 'react';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { BASIC_OFFER_URL, COMPLETE_OFFER_URL } from '../config';
import { useCurrency } from '../context/CurrencyContext';

interface FinalCTAProps {
  basicUrl?: string;
  completeUrl?: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  basicUrl = BASIC_OFFER_URL,
  completeUrl = COMPLETE_OFFER_URL
}) => {
  const currency = useCurrency();

  const handleCheckout = (url: string) => {
    if (url && url !== "COLOCAR_LINK_HOTMART_US5_AQUI" && url !== "COLOCAR_LINK_HOTMART_US10_AQUI") {
      window.open(url, '_blank');
    } else {
      alert(`[Redirección a Checkout Hotmart]\n\nEnlace seleccionado: ${url}\n\nPuedes configurar tus enlaces reales de Hotmart haciendo clic en el ícono de engranaje en la parte superior derecha.`);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8] relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#166534] border border-[#2D5A27]/20 text-xs font-bold uppercase tracking-wider shadow-2xs">
          <span>Acceso Inmediato en tu Email</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1C1917] leading-tight font-serif-display">
            Transforma tus sesiones con adolescentes hoy mismo.
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl mx-auto font-medium">
            Elige tu kit y empieza a contar con más de 80 recursos prácticos en tu práctica clínica.
          </p>
        </div>

        {/* Dual CTAs - Complete Kit emphasized */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          
          {/* Complete Kit Button */}
          <button
            onClick={() => handleCheckout(completeUrl)}
            className="w-full sm:w-auto px-8 py-4 sm:py-5 rounded-full bg-[#D25432] hover:bg-[#b84223] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <Star className="w-5 h-5 fill-amber-300 text-amber-300 shrink-0" />
            <span>Quiero el Kit Completo — {currency.completePriceFormatted}</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Basic Kit Button */}
          <button
            onClick={() => handleCheckout(basicUrl)}
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-[#1C1917] font-bold text-xs sm:text-sm uppercase tracking-wider border border-[#E8E2D8] shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Quiero el Kit Básico — {currency.basicPriceFormatted}</span>
          </button>

        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#78716C] font-semibold">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2D5A27]" />
            <span>Pago 100% Seguro vía Hotmart</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2D5A27]" />
            <span>Formatos PDF listos para imprimir</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2D5A27]" />
            <span>Garantía incondicional de 7 días</span>
          </div>
        </div>

      </div>
    </section>
  );
};

