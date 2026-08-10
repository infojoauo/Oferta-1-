import React from 'react';
import { Layers, Zap, FolderCheck, Eye, FileText, Sliders, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../config';

interface WhyChooseProps {
  onScrollToOffers?: () => void;
}

const getBenefitIcon = (iconName: string) => {
  switch (iconName) {
    case 'Layers': return <Layers className="w-6 h-6 text-[#2D5A27]" />;
    case 'Zap': return <Zap className="w-6 h-6 text-[#D25432]" />;
    case 'FolderCheck': return <FolderCheck className="w-6 h-6 text-[#2D5A27]" />;
    case 'Eye': return <Eye className="w-6 h-6 text-[#D25432]" />;
    case 'FileText': return <FileText className="w-6 h-6 text-[#2D5A27]" />;
    case 'Sliders': return <Sliders className="w-6 h-6 text-[#D25432]" />;
    default: return <Layers className="w-6 h-6 text-[#2D5A27]" />;
  }
};

export const WhyChoose: React.FC<WhyChooseProps> = ({ onScrollToOffers }) => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-block bg-white text-[#2D5A27] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#E8E2D8]">
            Beneficios Clave para el Profesional
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-serif-display">
            ¿Por qué tener un <span className="text-[#D25432] italic">kit de recursos terapéuticos</span>?
          </h2>
          <p className="text-[#78716C] text-sm sm:text-base font-medium leading-relaxed">
            Diseñado especialmente para la práctica clínica con adolescentes, optimizando tu preparación previa y enriqueciendo tus sesiones.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-[#E8E2D8] hover:border-[#D25432]/40 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8] flex items-center justify-center mb-4 group-hover:bg-[#DCFCE7] transition-colors">
                  {getBenefitIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-bold text-[#1C1917] mb-2 font-serif-display group-hover:text-[#D25432] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#78716C] text-xs sm:text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-[#D25432] text-white text-center max-w-4xl mx-auto shadow-xl space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif-display leading-tight">
            Herramientas pensadas exclusivamente para el lenguaje y la etapa adolescente.
          </h3>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-medium">
            Simplifica tu rutina profesional y ten siempre a la mano el material adecuado para cada demanda en tu consultorio.
          </p>
          {onScrollToOffers && (
            <div className="pt-2">
              <button
                onClick={onScrollToOffers}
                className="px-8 py-3.5 rounded-full bg-white hover:bg-stone-100 text-[#D25432] font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Ver opciones de kit</span>
                <ArrowRight className="w-4 h-4 text-[#D25432]" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};


