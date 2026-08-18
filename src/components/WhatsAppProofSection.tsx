import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { IMAGE_ASSETS } from '../config';

interface WhatsAppProofSectionProps {
  onScrollToOffers?: () => void;
}

export const WhatsAppProofSection: React.FC<WhatsAppProofSectionProps> = ({ onScrollToOffers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // The 3 uploaded WhatsApp proof images
  const proofs = [
    {
      id: 1,
      name: 'Lic. Mariana R.',
      imageSrc: (IMAGE_ASSETS as any).WHATSAPP_PROOF_1,
    },
    {
      id: 2,
      name: 'Dra. Claudia V.',
      imageSrc: (IMAGE_ASSETS as any).WHATSAPP_PROOF_2,
    },
    {
      id: 3,
      name: 'Lic. Sofía A.',
      imageSrc: (IMAGE_ASSETS as any).WHATSAPP_PROOF_3,
    }
  ];

  const prev = () => {
    setCurrentIndex((p) => (p === 0 ? proofs.length - 1 : p - 1));
  };

  const next = () => {
    setCurrentIndex((p) => (p === proofs.length - 1 ? 0 : p + 1));
  };

  const activeProof = proofs[currentIndex];

  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Green Eyebrow */}
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#008751] block mb-2">
          MENSAJES REALES
        </span>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight mb-2">
          Esto nos escriben las psicólogas que ya lo implementan
        </h2>

        {/* Subtitle */}
        <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-medium">
          Capturas reales de profesionales que aplicaron el kit en consulta y compartieron sus resultados por WhatsApp.
        </p>

        {/* Clean Display Container */}
        <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto relative mb-6">
          
          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Anterior captura"
            className="absolute -left-4 sm:-left-7 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 border border-stone-300 text-emerald-800 shadow-lg hover:bg-stone-50 flex items-center justify-center cursor-pointer z-10 transition-transform active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Clean Screenshot */}
          <div className="w-full flex items-center justify-center">
            <img
              src={activeProof.imageSrc}
              alt={`Captura WhatsApp ${activeProof.name}`}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[560px] object-contain rounded-2xl drop-shadow-xl"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Siguiente captura"
            className="absolute -right-4 sm:-right-7 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 border border-stone-300 text-emerald-800 shadow-lg hover:bg-stone-50 flex items-center justify-center cursor-pointer z-10 transition-transform active:scale-95"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

        </div>

        {/* Carousel Dots & Selectors */}
        <div className="flex justify-center items-center gap-2 pt-2 mb-7">
          {proofs.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all cursor-pointer rounded-full ${
                currentIndex === idx
                  ? 'bg-[#008751] w-8 h-2.5'
                  : 'bg-stone-300 hover:bg-stone-400 w-2.5 h-2.5'
              }`}
              aria-label={`Ver captura ${idx + 1}`}
            />
          ))}
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
