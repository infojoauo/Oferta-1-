import React from 'react';
import { ArrowRight, Zap, ShieldCheck, Lock } from 'lucide-react';

interface WhyChooseProps {
  onScrollToOffers?: () => void;
}

export const WhyChoose: React.FC<WhyChooseProps> = ({ onScrollToOffers }) => {
  return (
    <>
      {/* "Tu trabajo se vuelve más ligero..." Section */}
      <section className="py-16 md:py-20 bg-[#FAF7F2] border-b border-[#E8E2D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-serif-display">
              Tu trabajo se vuelve <span className="text-[#D25432] italic">más ligero</span> después de esto...
            </h2>
          </div>

          {/* List of transformations */}
          <div className="bg-white/60 border border-[#E8E2D8] rounded-3xl p-6 sm:p-10 shadow-xs max-w-3xl mx-auto space-y-5">
            <div className="flex items-start gap-4 text-base sm:text-lg font-medium text-[#292524]">
              <span className="text-[#D25432] font-black text-xl shrink-0">→</span>
              <p>Abrir una carpeta organizada por demanda clínica y saber en 30 segundos exactamente qué aplicar.</p>
            </div>
            
            <div className="flex items-start gap-4 text-base sm:text-lg font-medium text-[#292524]">
              <span className="text-[#D25432] font-black text-xl shrink-0">→</span>
              <p>Entregar un material que el adolescente mira y piensa: <em className="text-[#D25432]">"esto de aquí es diferente"</em>.</p>
            </div>

            <div className="flex items-start gap-4 text-base sm:text-lg font-medium text-[#292524]">
              <span className="text-[#D25432] font-black text-xl shrink-0">→</span>
              <p>Verlo hablar libremente por vía indirecta, sin darse cuenta de que se está profundizando en el tema.</p>
            </div>

            <div className="flex items-start gap-4 text-base sm:text-lg font-medium text-[#292524]">
              <span className="text-[#D25432] font-black text-xl shrink-0">→</span>
              <p>Responder con total seguridad cuando los padres preguntan: <em>"¿está funcionando el proceso?"</em>.</p>
            </div>

            <div className="flex items-start gap-4 text-base sm:text-lg font-medium text-[#292524]">
              <span className="text-[#D25432] font-black text-xl shrink-0">→</span>
              <p className="font-bold text-[#1C1917]">Dejar de improvisar en cada consulta. Empezar a aplicar con estructura.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Terracotta Highlight Callout Banner */}
      <section className="py-16 md:py-20 bg-[#D25432] text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-serif-display leading-tight">
            Tu paciente adolescente merece recursos hechos exclusivamente para él.
          </h2>

          <p className="text-base sm:text-lg text-white/95 leading-relaxed font-medium max-w-2xl mx-auto">
            No atiendes a un adulto con fichas de niño. Tampoco atiendes a un niño con técnicas teóricas de adulto. El adolescente necesita herramientas pensadas exactamente para su lenguaje y etapa de vida.
          </p>

          <div className="pt-4">
            <button
              onClick={onScrollToOffers}
              className="px-8 py-4 sm:px-10 sm:py-4.5 rounded-full bg-white hover:bg-stone-100 text-[#D25432] font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-2xl transition-all transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Quiero mi kit ahora</span>
              <ArrowRight className="w-5 h-5 text-[#D25432]" />
            </button>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/85 font-medium">
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-white" />
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Garantía de 15 días</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-white" />
              <span>Compra 100% segura</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

