import React, { useState } from 'react';
import { X, Eye, FileText, CheckCircle2, ArrowRight, Download, Sparkles } from 'lucide-react';
import { RESOURCE_SAMPLES } from '../config';
import { ResourceSampleItem } from '../types';

interface ResourcePreviewModalProps {
  sample: ResourceSampleItem | null;
  onClose: () => void;
  onScrollToOffers: () => void;
}

export const ResourcePreviewModal: React.FC<ResourcePreviewModalProps> = ({
  sample: initialSample,
  onClose,
  onScrollToOffers
}) => {
  const [selectedSample, setSelectedSample] = useState<ResourceSampleItem>(
    initialSample || RESOURCE_SAMPLES[0]
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full my-auto overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white">Muestra Interactiva del Material</h3>
              <p className="text-xs text-slate-400">Inspecciona el formato y estructura de las fichas de trabajo</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Sample selector tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {RESOURCE_SAMPLES.map((s) => {
              const isCurrent = s.id === selectedSample.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedSample(s)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                    isCurrent
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {s.title}
                </button>
              );
            })}
          </div>

          {/* Interactive Worksheet Specimen Frame */}
          <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 sm:p-6 space-y-6 shadow-inner">
            
            {/* Header of the simulated PDF sheet */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Categoría: {selectedSample.category}</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">PDF imprimible • Formato A4 / Digital</span>
              </div>

              <h4 className="text-xl font-bold text-slate-900">
                {selectedSample.sampleContent?.subtitle || selectedSample.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                "{selectedSample.sampleContent?.instructions || selectedSample.description}"
              </p>
            </div>

            {/* Questions / Exercises preview */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Ejercicios e interrogantes de reflexión contenidos en el material
              </h5>

              <div className="space-y-3">
                {selectedSample.sampleContent?.questions.map((q, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center shrink-0 font-bold">
                        {idx + 1}
                      </span>
                      <span>{q}</span>
                    </p>
                    {/* Simulated response box */}
                    <div className="h-10 rounded bg-white border border-dashed border-slate-300 w-full flex items-center px-3 text-[11px] text-slate-400 font-mono">
                      [Espacio interactivo de respuesta del adolescente en consulta]
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-slate-500 font-medium text-center sm:text-left">
            <span>¿Te resulta útil este formato? Este kit incluye más de 130 recursos listos.</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onScrollToOffers();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Ir a opciones de adquisición</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
