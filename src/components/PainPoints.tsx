import React from 'react';
import { HelpCircle, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { PAIN_POINTS } from '../config';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1E293B] text-white relative overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-[#1E293B] to-[#0F172A] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20 text-xs font-semibold">
            <AlertCircle className="w-4 h-4 text-rose-400" />
            <span>Desafíos habituales en consulta</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            ¿Te ha pasado esto durante una sesión?
          </h2>
        </div>

        {/* Situation Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {PAIN_POINTS.map((item, index) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 transition-all shadow-md flex flex-col justify-between ${
                index === 4 ? 'sm:col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 shrink-0 mt-0.5">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <p className="text-slate-200 text-sm sm:text-base font-medium leading-snug">
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition / Solution Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#2D5A27]/20 border border-[#2D5A27]/40 text-center max-w-3xl mx-auto shadow-xl space-y-3">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-[#DCFCE7]/20 text-[#DCFCE7] border border-[#DCFCE7]/30 mb-1">
            <CheckCircle2 className="w-6 h-6 text-[#DCFCE7]" />
          </div>
          <p className="text-lg sm:text-xl font-semibold text-white leading-relaxed">
            Con el Kit Terapéutico para Adolescentes, tienes más recursos a tu alcance para elegir la herramienta adecuada para cada momento.
          </p>
        </div>

      </div>
    </section>
  );
};
