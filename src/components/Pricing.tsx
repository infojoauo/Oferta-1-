import React from 'react';
import { Check, ArrowRight, Clock } from 'lucide-react';
import { BASIC_OFFER_URL, COMPLETE_OFFER_URL, IMAGE_ASSETS } from '../config';

interface PricingProps {
  basicUrl?: string;
  completeUrl?: string;
}

export const Pricing: React.FC<PricingProps> = ({
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
    <section id="ofertas" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-[#D97706]" />
            <span>OFERTA VÁLIDA POR TIEMPO LIMITADO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-serif-display">
            Elige tu kit
          </h2>
          <p className="text-[#78716C] text-sm sm:text-base font-medium">
            Ambos kits dan acceso inmediato. La diferencia está en cuánto quieres resolver de una vez.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* CARD 1: KIT BÁSICO (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-[#E8E2D8] shadow-sm p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5 text-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#78716C]">
                KIT BÁSICO
              </span>

              {/* Mockup */}
              <div className="w-36 mx-auto aspect-3/4 bg-[#FAF7F2] rounded-xl overflow-hidden p-2 border border-[#E8E2D8]">
                <img
                  src={IMAGE_ASSETS.BASIC_KIT_MOCKUP}
                  alt="Kit Básico"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80";
                  }}
                />
              </div>

              {/* Price */}
              <div>
                <div className="text-4xl font-black text-[#1C1917] font-serif-display">
                  US$5
                </div>
                <p className="text-xs text-[#78716C] pt-1 font-medium">
                  Pago único
                </p>
              </div>

              {/* Button */}
              <button
                onClick={() => handleCheckout(basicUrl)}
                className="w-full py-3.5 px-6 rounded-full border-2 border-[#1C1917] font-bold text-[#1C1917] hover:bg-[#FAF7F2] transition-colors text-xs uppercase tracking-wider cursor-pointer"
              >
                Quiero el Kit Básico
              </button>

              {/* Checklist */}
              <ul className="text-left space-y-2.5 pt-2 text-xs sm:text-sm text-[#44403C] font-medium border-t border-[#E8E2D8]">
                <li className="flex items-start gap-2 pt-2">
                  <Check className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
                  <span>50 recursos visuales terapéuticos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
                  <span>Organizado por demanda clínica</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
                  <span>Acceso inmediato en PDF</span>
                </li>
              </ul>
            </div>

            {/* Bottom Upgrade Highlight Box */}
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D8] text-center text-xs text-[#78716C]">
              <p className="font-bold text-[#1C1917]">
                92% eligen el Completo
              </p>
              <p>
                +80 recursos y 4 bonos exclusivos por solo US$5 más.
              </p>
            </div>
          </div>

          {/* CARD 2: KIT COMPLETO (7 cols - Featured Dark Green) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#2D5A27] text-white shadow-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden space-y-6">
            
            {/* Top Badge */}
            <div className="self-center bg-[#D25432] text-white font-extrabold text-[11px] uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
              MÁS VENDIDO
            </div>

            <div className="space-y-5 text-center">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-200">
                KIT COMPLETO
              </span>

              {/* Mockup */}
              <div className="w-48 mx-auto aspect-16/10 rounded-xl overflow-hidden bg-white/10 p-1 border border-white/20">
                <img
                  src={IMAGE_ASSETS.COMPLETE_KIT_MOCKUP}
                  alt="Kit Completo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80";
                  }}
                />
              </div>

              <p className="text-xs sm:text-sm text-emerald-100 font-medium">
                El kit completo para transformar tus sesiones
              </p>

              {/* Price */}
              <div>
                <div className="text-xs line-through text-emerald-300 font-semibold">
                  De US$35
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white font-serif-display">
                  US$10
                </div>
                <p className="text-xs text-emerald-100 pt-1 font-medium">
                  Pago único • Acceso inmediato
                </p>
                <div className="text-xs font-bold text-amber-300 pt-1">
                  Ahorras más del 70% de descuento
                </div>
              </div>

              {/* Terracotta Button */}
              <button
                onClick={() => handleCheckout(completeUrl)}
                className="w-full py-4 px-6 rounded-full bg-[#D25432] hover:bg-[#b84223] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-xl transition-all transform hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Quiero el Kit Completo</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>

              {/* Checklist */}
              <ul className="text-left space-y-2.5 pt-3 text-xs sm:text-sm text-white font-medium border-t border-emerald-700/60">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>+80 recursos visuales terapéuticos</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Organizado por demanda clínica</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Acceso inmediato en PDF en tu correo</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Acceso vitalicio al material</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Garantía incondicional de 15 días</span>
                </li>
                <li className="flex items-start gap-2.5 font-bold text-amber-300">
                  <Check className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Incluye los 4 Bonos Exclusivos</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

