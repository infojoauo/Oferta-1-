import React from 'react';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { BASIC_OFFER_URL, COMPLETE_OFFER_URL } from '../config';

interface FinalCTAProps {
  basicUrl?: string;
  completeUrl?: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  basicUrl = BASIC_OFFER_URL,
  completeUrl = COMPLETE_OFFER_URL
}) => {

  const handleCheckout = (url: string) => {
    if (url && url !== "COLOCAR_LINK_HOTMART_US5_AQUI" && url !== "COLOCAR_LINK_HOTMART_US10_AQUI") {
      window.open(url, '_blank');
    } else {
      alert(`[Redirección a Checkout Hotmart]\n\nEnlace seleccionado: ${url}\n\nPuedes configurar tus enlaces reales de Hotmart haciendo clic en el ícono de engranaje en la parte superior derecha.`);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#2D5A27] text-white relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-emerald-100 border border-white/20 text-xs font-bold uppercase tracking-wider">
          <span>Acceso Inmediato en tu Email</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-serif-display">
            Transforma tus sesiones con adolescentes hoy mismo.
          </h2>
          <p className="text-base sm:text-lg text-emerald-100 leading-relaxed max-w-xl mx-auto font-medium">
            Elige tu kit y empieza a contar con más de 80 recursos prácticos en tu práctica clínica.
          </p>
        </div>

        {/* Dual CTAs - Complete Kit emphasized */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          
          {/* Complete Kit Button */}
          <button
            onClick={() => handleCheckout(completeUrl)}
            className="w-full sm:w-auto px-8 py-4 sm:py-5 rounded-full bg-[#D25432] hover:bg-[#b84223] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <Star className="w-5 h-5 fill-amber-300 text-amber-300 shrink-0" />
            <span>Quiero el Kit Completo — US$10</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Basic Kit Button */}
          <button
            onClick={() => handleCheckout(basicUrl)}
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Quiero el Kit Básico — US$5</span>
          </button>

        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-300" />
            <span>Pago 100% Seguro vía Hotmart</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-300" />
            <span>Formatos PDF listos para imprimir</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-300" />
            <span>Garantía incondicional de 15 días</span>
          </div>
        </div>

      </div>
    </section>
  );
};

