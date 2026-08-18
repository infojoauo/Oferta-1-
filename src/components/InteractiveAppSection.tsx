import React from 'react';
import { FileSpreadsheet, ShieldCheck, Printer, CheckCircle2, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { IMAGE_ASSETS } from '../config';

interface InteractiveAppSectionProps {
  onScrollToOffers?: () => void;
}

export const InteractiveAppSection: React.FC<InteractiveAppSectionProps> = ({ onScrollToOffers }) => {
  const features = [
    'Evaluación inicial, motivo de consulta y anamnesis clínica',
    'Registro de objetivos terapéuticos y técnicas aplicadas por sesión',
    'Seguimiento visual de la evolución, tareas y acuerdos con los padres',
    'Formato PDF imprimible listo para archivar en la carpeta del paciente'
  ];

  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Green pill tag */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#008751] text-white text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
          <span>✨ INCLUIDO EN TU KIT</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight max-w-2xl mx-auto mb-3">
          Ficha Técnica Completa
        </h2>

        {/* Subtitle */}
        <p className="text-stone-700 text-xs sm:text-sm sm:text-base max-w-xl mx-auto mb-5 leading-relaxed font-medium">
          Registra y organiza el proceso terapéutico desde el inicio hasta el seguimiento del paciente.
        </p>

        {/* 3 Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-bold text-stone-700 mb-8">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-100 border border-stone-200">
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-700" />
            100% en formato PDF
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-100 border border-stone-200">
            <Printer className="w-3.5 h-3.5 text-emerald-700" />
            Imprime las veces que necesites
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-100 border border-stone-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            Estructura clínica profesional
          </span>
        </div>

        {/* Card for Ficha Técnica */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-[#F8FAFC] rounded-2xl border-2 border-stone-200 overflow-hidden shadow-xl p-4 sm:p-6 text-left">
            
            {/* Top document bar */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 text-xs mb-5">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-[#008751]"></span>
                <span>Ficha Técnica Clínica • Expediente Terapéutico Infantil</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#008751] text-white font-bold text-[10px]">
                PDF Imprimible
              </span>
            </div>

            {/* Clean image display with no inner white box/border */}
            <div className="w-full flex items-center justify-center mb-5">
              {(IMAGE_ASSETS as any).FICHA_TECNICA ? (
                <img
                  src={(IMAGE_ASSETS as any).FICHA_TECNICA}
                  alt="Ficha Técnica Clínica • Expediente Terapéutico Infantil"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[420px] object-contain rounded-xl drop-shadow-md"
                />
              ) : (
                <div className="w-full h-48 rounded-lg bg-stone-50 border-2 border-dashed border-stone-200 flex flex-col items-center justify-center text-stone-400 p-4 text-center">
                  <ImageIcon className="w-10 h-10 stroke-[1.2] mb-1.5 text-stone-300" />
                  <span className="text-[11px] font-bold text-stone-400 uppercase">Espacio preparado para imagen</span>
                  <span className="text-[10px] text-stone-400">Ficha Técnica de Seguimiento</span>
                </div>
              )}
            </div>

            {/* Checklist of what the Ficha includes */}
            <div className="space-y-2.5 pt-2 border-t border-stone-200/80">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#008751] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
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
