import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { PAIN_POINTS } from '../config';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] text-[#1C1917] relative overflow-hidden border-b border-[#E8E2D8]">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-extrabold uppercase tracking-wider shadow-2xs">
            <AlertCircle className="w-4 h-4 text-rose-600" />
            <span>Desafíos habituales en consulta</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1C1917]">
            ¿Te ha pasado esto durante una sesión?
          </h2>
          <p className="text-[#78716C] text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Trabajar con adolescentes presenta retos únicos que requieren un enfoque dinámico y estructurado.
          </p>
        </motion.div>

        {/* Situation Cards Grid with Motion */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {PAIN_POINTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-6 rounded-2xl bg-white border border-[#E8E2D8] hover:border-rose-400 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                index === 4 ? 'sm:col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <p className="text-[#292524] text-sm sm:text-base font-semibold leading-relaxed group-hover:text-[#1C1917]">
                  "{item.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition / Solution Callout with Motion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#2D5A27]/20 text-center max-w-3xl mx-auto shadow-md relative overflow-hidden group"
        >
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#DCFCE7]/40 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center space-y-3">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#DCFCE7] text-[#2D5A27] border border-[#2D5A27]/20 shadow-2xs">
              <CheckCircle2 className="w-6 h-6 text-[#2D5A27]" />
            </div>
            <p className="text-base sm:text-lg md:text-xl font-bold text-[#1C1917] leading-relaxed max-w-2xl">
              Con el <span className="text-[#2D5A27]">Kit Terapéutico para Adolescentes</span>, tienes más recursos a tu alcance para elegir la herramienta adecuada para cada momento.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

